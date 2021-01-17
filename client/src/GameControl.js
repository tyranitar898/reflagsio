import React, { useState } from "react";
import { Container, Col, Row, Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NUMPERKSSUBMIT = 2;
const NUMRFSUBMIT = 1;

function PlayerItem(props) {
  // Correct! There is no need to specify the key here:

  let p = props.player;
  let pts = props.game.points[p.name];
  let c = "playerActive";
  if (props.game.curSingle == p.name) {
    c = "playerIsCurSingle";
  }
  if (!p.active) {
    c = "playerInactive";
  }
  return <p id={c}>{p.name + " : " + pts}</p>;
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
  const [gameInfo, setGameinfo] = useState(true);
  //hide and unhides game info

  var curSocket = props.socket;
  var curName = props.name;
  var game = props.game;
  var perks = props.hand.perks;
  var rfs = props.hand.redflags;
  var dates = game.dates;
  let single = null;
  let matchHelperText = null;
  let isCurSingle = false;
  const players = game.players;

  if (game.curSingle === curName) {
    isCurSingle = true;
    single =
      "You are the current single (other players are making dates for you!)";
    matchHelperText = "";
  } else {
    single =
      game.curSingle +
      " is the current single (you and other players are making dates for them)";
    matchHelperText = "";
  }
  if (game.turn !== curTurn) {
    setTurn(game.turn);
    setPerks([]);
    setRFs([]);
  }

  const handleDateCards = (card) => {
    let splitStr = card.split(" thinks ");
    //using split str rn but should make card class?
    let cardCreatorStr = splitStr[0];

    if (isCurSingle) {
      //update winning match

      //checks that all cards have an RF attached
      if (players.length - 1 === dates.length) {
        for (var i = 0; i < dates.length; i++) {
          var curDate = dates[i];
          if (curDate.rf.length !== 1) {
            return;
          }
        }

        curSocket.emit("roundOver", props.game.code, cardCreatorStr);
      } else {
        //tell them not everyone submitted a match
      }
    } else {
      if (selectedRFs.length === NUMRFSUBMIT) {
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
    if (!isCurSingle) {
      if (selectedPerks.length === NUMPERKSSUBMIT) {
        console.log("yes");
        curSocket.emit("sendMatch", props.game.code, props.name, selectedPerks);
      } else {
        //tell them u need to pick another card
      }
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
    //pts beed to be restrcutured
    <PlayerItem key={player.name} player={player} game={game} />
  ));
  let datesList;
  let exampleDate = "Dates will apear here";
  if (dates === undefined || dates.length == 0) {
    // datesList = (
    //   <CardButton
    //     className={"cards-dates"}
    //     key={exampleDate}
    //     value={exampleDate}
    //   />
    // );
  } else {
    let temp = dates.map((date, index) => (
      <CardButton
        className={"cards-dates"}
        socket={curSocket}
        gamecode={game.code}
        key={date.dateCreator + index}
        value={date.dateStr}
        cardOnClick={handleDateCards}
      />
    ));
    datesList = (
      <div>
        <h1>
          Dates for {props.game.curSingle} {matchHelperText}&#11015;
        </h1>
        {temp}
      </div>
    );
  }

  const yourPerks = perks.map((card, index) => (
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
    <CardButton
      className={"cards-rf"}
      socket={curSocket}
      gamecode={game.code}
      key={card + index}
      value={card}
      cardOnClick={addRFToMatch}
    />
  ));

  return (
    <div id="GameControl">
      <Container fluid>
        <Row id="gameRow">
          <Button
            onClick={() => setGameinfo(!gameInfo)}
            aria-controls="example-collapse-text"
            aria-expanded={gameInfo}
          >
            {gameInfo ? "Hide GameInfo" : "Show GameInfo"}
          </Button>
        </Row>

        <Collapse in={gameInfo}>
          <div id="GameControlHeader">
            <Row id="gameRow">
              <Col md={11}>
                <h1>Welcome {props.name}</h1>
                <h1>{single}</h1>
                <h3>Round: {props.game.turn}</h3>
                <h1>
                  Red Flag game code: <strong>{props.game.code}</strong>
                </h1>
              </Col>
            </Row>
          </div>
        </Collapse>

        <Row id="datesRow">
          <Col md={11}>
            <div>{datesList}</div>
          </Col>
        </Row>
        <Row id="gameRow">
          <Col md={6}>
            <div>
              <h1>Your Perks&#11088;</h1>
              <h5>(Select 2 and click the Submit Match)</h5>
              {yourPerks}
            </div>
          </Col>
          <Col md={5}>
            <div>
              <h1>Your Red Flags &#128681;</h1>
              <h5>(Select 1 and select the date you want to ruin)</h5>
              {yourRfs}
            </div>
          </Col>
          <Col md={1}>
            <div id="gameRoomInfo">
              <h4>Score </h4>
              {playerList}
            </div>
          </Col>
        </Row>
        <Row id="gameRow">
          <Col>
            <button className="backButtons" onClick={sendPerksofDate}>
              Submit Match
            </button>
          </Col>
        </Row>
      </Container>

      {/* <div>
        <h1>Your ideal match for {props.game.curSingle}</h1>
        {matchCards}
        
      </div> */}
      <div id="bottomOfPage"></div>
    </div>
  );
}
export default GameControl;
