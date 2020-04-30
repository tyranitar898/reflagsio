import React, { useState, createContext } from "react";
import { render } from "react-dom";

const NUMPERKSSUBMIT = 2;

function PlayerItem(props) {
  // Correct! There is no need to specify the key here:

  let p = props.player;
  let pts = props.game.points[p.name];
  let c = "playerActive";
  if (!p.active) {
    c = "playerInactive";
  }
  return <li id={c}>{p.name + " : " + pts}</li>;
}
/* 
const sendCardButton = () => {
  props.socket.emit("sendCardButton", props.gamecode, props.value[0]);
}; */
function CardButton(props) {
  var cardName = props.value;
  var idName = props.idName;

  // Correct! There is no need to specify the key here:
  return (
    <button onClick={() => props.cardOnClick(cardName)} id={idName}>
      {cardName}
    </button>
  );
}
//TODO REFACTOR FOLLOWING. change cardbutton fucntion to a class ? so it can have states cuz rn its calling updateslectedcards every time it maps???

function GameControl(props) {
  const [selectedCards, setCards] = useState([]);

  var curName = props.name;
  var game = props.game;
  var perks = props.hand.perks;
  var rfs = props.hand.redflags;
  var dates = game.dates;
  let single = null;
  let isCurSingle = false;
  if (game.curSingle === curName) {
    isCurSingle = true;
    single = <p>You are the cur single</p>;
  }
  console.log("Game control updated");

  const sendWinningMatch = (card) => {
    if (isCurSingle) {
      let splitStr = card.split(" made ");
      //using split str rn but should make card class?
      let roundWinnerName = splitStr[0];
      console.log(roundWinnerName);
      //update winning match
      props.socket.emit("roundOver", props.game.code, roundWinnerName);
    }
  };

  const sendPerksofMatch = () => {
    if (selectedCards.length === NUMPERKSSUBMIT) {
      props.socket.emit(
        "sendMatch",
        props.game.code,
        props.name,
        selectedCards
      );
    } else {
      //tell them u need to pick another card
    }
  };

  const addRFToMatch = () => {};

  const addPerksToMatch = (card) => {
    var temp = selectedCards;
    temp.push(card);
    if (selectedCards.length > NUMPERKSSUBMIT) {
      temp.shift();
    }
    setCards([...temp]);
  };

  const players = game.players;
  const playerList = players.map((player) => (
    // Correct! Key should be specified inside the array.

    //pts beed to be restrcutured
    <PlayerItem key={player.name} player={player} game={game} />
  ));

  const datesList = dates.map((date, index) => (
    // Correct! Key should be specified inside the array.
    <CardButton
      socket={props.socket}
      gamecode={game.code}
      key={date.from + index}
      value={
        date.from +
        " made sm1 who" +
        " 1. " +
        date.perks[0] +
        " 2. " +
        date.perks[1]
      }
      cardOnClick={sendWinningMatch}
    />
  ));

  const yourPerks = perks.map((card) => (
    // Correct! Key should be specified inside the array.
    <CardButton
      idName={"cards-perk"}
      socket={props.socket}
      gamecode={game.code}
      key={card}
      value={card}
      cardOnClick={addPerksToMatch}
    />
  ));

  const yourRfs = rfs.map((card) => (
    // Correct! Key should be specified inside the array.
    <CardButton
      idName={"cards-rf"}
      socket={props.socket}
      gamecode={game.code}
      key={card}
      value={card}
      cardOnClick={addRFToMatch}
    />
  ));

  const matchCards = selectedCards.map((card, index) => (
    // Correct! Key should be specified inside the array.
    <li key={index}>{card}</li>
  ));

  console.log(game);

  return (
    <div>
      <h1>
        Welcome {props.name} | Current Turn: {props.game.turn}
      </h1>
      {single}
      <h1>Red Flag game code: {props.game.code}</h1>
      <h1>Players in this Game</h1>
      {playerList}
      <h1>Matches for {props.game.curSingle}</h1>
      {datesList}
      <h1>Your Perks</h1>
      {yourPerks}
      <h1>Your Red Flags</h1>
      {yourRfs}
      <h1>Your ideal match for {props.game.curSingle}</h1>
      {matchCards}
      <button onClick={sendPerksofMatch}>Submit match</button>
    </div>
  );
}
export default GameControl;
