import React, { useState } from "react";
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
  const [clicked, setClicked] = useState(false);
  var cardName = props.value;
  var className = props.className;

  if (clicked) {
    className += "-clicked";
  }

  // Correct! There is no need to specify the key here:
  return (
    <button
      onClick={() => {
        props.cardOnClick(cardName);
        setClicked(!clicked);
      }}
      className={className}
    >
      {cardName}
    </button>
  );
}
//TODO REFACTOR FOLLOWING. change cardbutton fucntion to a class ? so it can have states cuz rn its calling updateslectedcards every time it maps???

function GameControl(props) {
  const [selectedPerks, setPerks] = useState([]);
  const [selectedRFs, setRFs] = useState([]);
  const [curTurn, setTurn] = useState(0);

  var curSocket = props.socket;
  var curName = props.name;
  var game = props.game;
  var perks = props.hand.perks;
  var rfs = props.hand.redflags;
  var dates = game.dates;
  let single = null;
  let isCurSingle = false;
  const players = game.players;
  console.log(game);

  if (game.curSingle === curName) {
    isCurSingle = true;
    single = <p>You are the cur single</p>;
  }
  if (game.turn !== curTurn) {
    setTurn(game.turn);
    setPerks([]);
    setRFs([]);
  }

  console.log("Game control updated");

  const handleDateCards = (card) => {
    let splitStr = card.split(" made ");
    //using split str rn but should make card class?
    let cardCreatorStr = splitStr[0];

    if (isCurSingle) {
      //update winning match
      if (players.length - 1 === dates.length) {
        curSocket.emit("roundOver", props.game.code, cardCreatorStr);
      } else {
        //tell them not everyone submitted a match
      }
    } else {
      if (selectedRFs.length === 1) {
        curSocket.emit(
          "attachRFtoMatch",
          selectedRFs[0],
          props.game.code,
          cardCreatorStr,
          props.name
        );
      } else {
        //tell them they need to seelct RF
      }
    }
  };

  const sendPerksofDate = () => {
    if (selectedPerks.length === NUMPERKSSUBMIT) {
      curSocket.emit("sendMatch", props.game.code, props.name, selectedPerks);
    } else {
      //tell them u need to pick another card
    }
  };

  const addPerksToMatch = (card) => {
    var temp = selectedPerks;
    let index = temp.indexOf(card);
    console.log(index);
    if (index > -1) {
      temp.splice(index, 1);
    } else {
      temp.push(card);
    }
    setPerks([...temp]);
  };

  const addRFToMatch = (card) => {
    var temp = selectedRFs;
    let index = temp.indexOf(card);
    console.log(index);
    if (index > -1) {
      temp.splice(index, 1);
    } else {
      temp.push(card);
    }
    setRFs([...temp]);
  };

  const playerList = players.map((player) => (
    // Correct! Key should be specified inside the array.

    //pts beed to be restrcutured
    <PlayerItem key={player.name} player={player} game={game} />
  ));

  const datesList = dates.map((date, index) => (
    // Correct! Key should be specified inside the array.
    <CardButton
      socket={curSocket}
      gamecode={game.code}
      key={date.dateCreator + index}
      value={date.dateStr}
      cardOnClick={handleDateCards}
    />
  ));

  const yourPerks = perks.map((card, index) => (
    // Correct! Key should be specified inside the array.
    <CardButton
      className={"cards-perk"}
      socket={curSocket}
      gamecode={game.code}
      key={card + index}
      value={card}
      cardOnClick={addPerksToMatch}
      selectedPerks={selectedPerks}
    />
  ));

  const yourRfs = rfs.map((card, index) => (
    // Correct! Key should be specified inside the array.
    <CardButton
      className={"cards-rf"}
      socket={curSocket}
      gamecode={game.code}
      key={card + index}
      value={card}
      cardOnClick={addRFToMatch}
    />
  ));

  const matchCards = selectedPerks.map((card, index) => (
    // Correct! Key should be specified inside the array.
    <li key={index}>{card}</li>
  ));

  return (
    <div>
      <h1>
        Welcome {props.name} | Current Turn: {props.game.turn}
      </h1>
      {single}
      <h1>Red Flag game code: {props.game.code}</h1>
      <h1>Players in this Game</h1>
      {playerList}
      <div>
        <h1>Matches for {props.game.curSingle}</h1>
        {datesList}
      </div>
      <div>
        <h1>Your Perks (Select 2)</h1>
        {yourPerks}
      </div>
      <div>
        <h1>Your Red Flags (Select 1)</h1>
        {yourRfs}
      </div>
      <div>
        <h1>Your ideal match for {props.game.curSingle}</h1>
        {matchCards}
        <button onClick={sendPerksofDate}>Submit match</button>
      </div>
    </div>
  );
}
export default GameControl;
