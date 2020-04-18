import React from "react";
import "./App.css";
import StartControl from "./StartControl";
import GameControl from "./GameControl";
import io from "socket.io-client";

//const socket = io("http://localhost:8000");
const socket = io("https://redflagsio.herokuapp.com/");
//Socket responses

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      response: false,
      socket: socket,
      name: "",
      isHost: false,
      game: false,
      roomcode: "",
    };
  }

  componentDidMount() {
    this.state.socket.on("createGame", (game) => {
      console.log(game);
      this.setState({ game: game, roomcode: game.code, isHost: true });
    });
    this.state.socket.on("joinGame", (game) => {
      console.log(game);
      this.setState({ game: game, roomcode: game.code });
    });
    this.state.socket.on("startGame", (game, hands) => {
      console.log(this.state.name);
      var hand = findHand(this.state.name, hands);
      console.log(game);

      this.setState({ game: game, roomcode: game.code, hand: hand });
    });
  }

  recieveStart = () => {
    socket.emit("startGame", this.state.roomcode, this.state.name);
  };

  recieveNameRoom = (name, roomcode) => {
    this.setState({ name: name, roomcode: roomcode });

    if (roomcode === "") {
      socket.emit("createGame", {
        playerName: name,
      });
    } else {
      console.log(roomcode);
      socket.emit("joinGame", {
        playerName: name,
        roomCode: roomcode,
      });
    }
  };

  render() {
    let MenuOrStart;
    if (this.state.game.isActive) {
      MenuOrStart = (
        <GameControl game={this.state.game} hand={this.state.hand} />
      );
    } else {
      MenuOrStart = (
        <StartControl
          pStartGame={this.recieveStart}
          pCallBack={this.recieveNameRoom}
          socket={this.state.socket}
          game={this.state.game}
          roomcode={this.state.roomcode}
          isHost={this.state.isHost}
        />
      );
    }
    return <div>{MenuOrStart}</div>;
  }
}

function findHand(name, hands) {
  for (var i = 0; i < hands.length; i++) {
    if (name === hands[i].name) {
      return hands[i];
    }
  }
  return [];
}

export default App;
