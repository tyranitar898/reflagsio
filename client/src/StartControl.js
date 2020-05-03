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
  //dont technicallhy need this.
  //render is checking props( correct)
  //child components shouldnt change based on parent's state.
  componentWillReceiveProps(props) {
    if (props.game !== false) {
      this.setState({ game: props.game, roomcode: props.roomcode });
    }
  }

  callbackFunction = (name, roomcode) => {
    this.setState({ name: name, roomcode: roomcode });
    this.props.pCallBack(name, roomcode);
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
                pCallBack={this.callbackFunction}
              />
            </div>
          );
        } else if (nextPage === "join") {
          nextWindow = <JoinWindow pCallBack={this.callbackFunction} />;
        } else if (nextPage === "howTo") {
          nextWindow = <HowTo />;
        } else {
        }
      }
    }

    return (
      <div>
        <div id="gameTitleHeader">
          <h1>Red Flags &#128681;</h1>
        </div>
        <div>
          {startButtons}
          {nextWindow}
          {gameLobby}
          <div id="backButtonDiv">{backButton}</div>
          <h2 id="builtByHeader">Built by Ryan Chang</h2>
        </div>
      </div>
    );
  }
}

export default StartControl;
