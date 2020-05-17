import React from "react";
import CreateWindow from "./CreateWindow";
import JoinWindow from "./JoinWindow";
import GameLobby from "./GameLobby";
import HowTo from "./HowTo";
class StartControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: props.socket,
      nextPage: "start",
      name: "",
      game: false,
    };
  }

  sendNameRoomToParent = (name, roomcode) => {
    this.setState({ name: name, roomcode: roomcode });
    this.props.handleNameRoom(name, roomcode);
  };

  handleStartGame = (event) => {
    this.props.pStartGame();
  };

  handleMenuButtonClick = (event) => {
    const targetName = event.target.name;
    var value;
    if (targetName === "create") {
      value = "create";
    } else if (targetName === "join") {
      value = "join";
    } else if (targetName === "back") {
      value = "start";
    } else if (targetName === "howTo") {
      value = "howTo";
    }

    this.setState((state) => ({
      nextPage: value,
    }));
  };

  render() {
    let nextPage = this.state.nextPage;
    let backButton;
    let startButtons = (
      <div id="starterButtonsDiv">
        <button
          name="create"
          className="starterButtons"
          onClick={this.handleMenuButtonClick}
        >
          Create
        </button>
        <button
          name="join"
          className="starterButtons"
          onClick={this.handleMenuButtonClick}
        >
          Join
        </button>
        <button
          name="howTo"
          className="starterButtons"
          onClick={this.handleMenuButtonClick}
        >
          How To Play
        </button>
        <div id="submitYourOwn">
          <a href="https://docs.google.com/document/d/15bfxmx8IKlcLV3mxDfG7BGT8_s6Fs7vCE9WmP4pCRDQ/edit?usp=sharing">
            Feel free to submit Red flags or Perks you think are funny here
          </a>
        </div>
      </div>
    );
    let nextWindow;
    let gameLobby;
    if (this.props.game) {
      //has a game
      startButtons = <div></div>;
      backButton = <div></div>;
      if (this.props.isHost) {
        backButton = (
          <button className="backButtons" onClick={this.handleStartGame}>
            Start Game
          </button>
        );
      }

      gameLobby = <GameLobby game={this.props.game} />;
    } else {
      //no game

      gameLobby = <div></div>;
      if (nextPage === "start") {
        nextWindow = <div />;
      } else {
        backButton = (
          <button
            name="back"
            className="backButtons"
            onClick={this.handleMenuButtonClick}
          >
            Back
          </button>
        );
        startButtons = <div />;
        if (nextPage === "create") {
          nextWindow = (
            <div>
              <CreateWindow
                socket={this.props.socket}
                pCallBack={this.sendNameRoomToParent}
              />
            </div>
          );
        } else if (nextPage === "join") {
          nextWindow = (
            <JoinWindow
              socket={this.props.socket}
              pCallBack={this.sendNameRoomToParent}
            />
          );
        } else if (nextPage === "howTo") {
          nextWindow = <HowTo />;
        } else {
        }
      }
    }

    return (
      <div>
        <div id="gameTitleHeader">
          <h1>&nbsp;Red Flags &#128681;</h1>
        </div>
        <div id="StartLobby">
          {startButtons}
          {nextWindow}
          {gameLobby}
          <div id="backButtonDiv">{backButton}</div>
        </div>
        <div id="builtByDiv">
          <h2 id="builtByHeader">Built by Ryan Chang</h2>
          <h2 id="checkOutThis">
            Also checkout this game my friend Brandon made&nbsp;
            <a href="https://pseudonyms.brandon-wang.me/">here</a>
          </h2>
        </div>
      </div>
    );
  }
}

export default StartControl;
