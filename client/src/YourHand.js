import React from "react";
var PERKPERHAND = 4;
var RFPERHAND = 3;

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function YourHand(props) {
  var game = props.game;

  var Perks = [];
  for (var i = 0; i < PERKPERHAND; i++) {}

  return <h1>Actual Game</h1>;
}
export default YourHand;
