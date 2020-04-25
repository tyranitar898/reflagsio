import React from "react";
import { render } from "react-dom";

function PlayerItem(props) {
  // Correct! There is no need to specify the key here:
  console.log("player item updateed");
  console.log(props.player);
  let p = props.player;
  let c = "playerActive";
  if (!p.active) {
    c = "playerInactive";
  }
  return <li id={c}>{p.name}</li>;
}

function CardButton(props) {
  var cardName = props.value[0];
  const sendCardButton = () => {
    props.socket.emit("sendCardButton", props.gamecode, props.value[0]);
  };
  // Correct! There is no need to specify the key here:
  return (
    <button onClick={props.updateSelectedCards(cardName)} id="cards">
      {cardName}
    </button>
  );
}

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedCards: "" };
  }

  //TODO REFACTOR FOLLOWING. change cardbutton fucntion to a class ? so it can have states cuz rn its calling updateslectedcards every time it maps???
  updateSelectedCards = (cardStr) => {
    //this.setState({ selectedCards: cardStr });
    console.log(cardStr);
  };

  render() {
    var game = this.props.game;

    console.log("Game control updated");
    console.log(game);

    const players = game.players;
    const playerList = players.map((player) => (
      // Correct! Key should be specified inside the array.
      <PlayerItem key={player.name} player={player} />
    ));

    var perks = this.props.hand.perks;

    const yourPerks = perks.map((card) => (
      // Correct! Key should be specified inside the array.
      <CardButton
        socket={this.props.socket}
        gamecode={game.code}
        key={card}
        value={card}
        updateSelectedCards={this.updateSelectedCards}
      />
    ));

    var rfs = this.props.hand.redflags;

    const yourRfs = rfs.map((card) => (
      // Correct! Key should be specified inside the array.
      <CardButton
        socket={this.props.socket}
        gamecode={game.code}
        key={card}
        value={card}
        updateSelectedCards={this.updateSelectedCards}
      />
    ));
    return (
      <div>
        <h1>Red Flag game code: {this.props.game.code}</h1>
        <h1>Players in this Game</h1>
        {playerList}
        <h1>Your Perks</h1>
        {yourPerks}
        <h1>Your Red Flags</h1>
        {yourRfs}
      </div>
    );
  }
}
export default GameControl;
