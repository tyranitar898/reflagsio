import React, { useState } from "react";
import { render } from "react-dom";

function PlayerItem(props) {
  // Correct! There is no need to specify the key here:

  let p = props.player;
  let c = "playerActive";
  if (!p.active) {
    c = "playerInactive";
  }
  return <li id={c}>{p.name}</li>;
}

function CardButton(props) {
  var cardName = props.value[0];
  //no need for below
  const sendCardButton = () => {
    props.socket.emit("sendCardButton", props.gamecode, props.value[0]);
  };
  // Correct! There is no need to specify the key here:
  return (
    <button onClick={() => props.updateSelectedCards(cardName)} id="cards">
      {cardName}
    </button>
  );
}

function GameControl(props) {
  //TODO REFACTOR FOLLOWING. change cardbutton fucntion to a class ? so it can have states cuz rn its calling updateslectedcards every time it maps???
  const [card1, setCard1] = useState("");

  var game = props.game;

  console.log("Game control updated");

  const players = game.players;
  const playerList = players.map((player) => (
    // Correct! Key should be specified inside the array.
    <PlayerItem key={player.name} player={player} />
  ));

  var perks = props.hand.perks;

  const yourPerks = perks.map((card) => (
    // Correct! Key should be specified inside the array.
    <CardButton
      socket={props.socket}
      gamecode={game.code}
      key={card}
      value={card}
      updateSelectedCards={setCard1}
    />
  ));

  var rfs = props.hand.redflags;

  const yourRfs = rfs.map((card) => (
    // Correct! Key should be specified inside the array.
    <CardButton
      socket={props.socket}
      gamecode={game.code}
      key={card}
      value={card}
      updateSelectedCards={setCard1}
    />
  ));
  return (
    <div>
      <h1>Red Flag game code: {props.game.code}</h1>
      <h1>Players in this Game</h1>
      {playerList}
      <h1>Your Perks</h1>
      {yourPerks}
      <h1>Your Red Flags</h1>
      {yourRfs}
    </div>
  );
}
export default GameControl;
