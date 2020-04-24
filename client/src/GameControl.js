import React from "react";
import { render } from "react-dom";

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function CardButton(props) {
  var cardName = props.value[0];
  const sendCardButton = () => {
    props.socket.emit("sendCardButton", props.gamecode, props.value[0]);
  };
  // Correct! There is no need to specify the key here:
  return (
    <button onClick={sendCardButton} id="cards">
      {cardName}
    </button>
  );
}

function GameControl(props) {
  var game = props.game;
  const players = game.players;
  const playerList = players.map((player) => (
    // Correct! Key should be specified inside the array.
    <ListItem key={player.name} value={player.name} />
  ));

  var perks = props.hand.perks;

  const yourPerks = perks.map((card) => (
    // Correct! Key should be specified inside the array.
    <CardButton
      socket={props.socket}
      gamecode={game.code}
      key={card}
      value={card}
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
    />
  ));
  console.log(props.game.code);
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
