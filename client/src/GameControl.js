import React from "react";
import { render } from "react-dom";
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function GameControl(props) {
  var game = props.game;
  const players = game.players;
  const playerList = players.map((player) => (
    // Correct! Key should be specified inside the array.
    <ListItem key={player.name} value={player.name} />
  ));

  var perks = props.hand.perks;
  console.log(perks);
  const yourPerks = perks.map((card) => (
    // Correct! Key should be specified inside the array.
    <ListItem key={card} value={card} />
  ));

  var rfs = props.hand.redflags;
  console.log(rfs);
  const yourRfs = rfs.map((card) => (
    // Correct! Key should be specified inside the array.
    <ListItem key={card} value={card} />
  ));

  return (
    <div>
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
