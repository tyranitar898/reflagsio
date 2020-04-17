import React from "react";
import CreateWindow from "./CreateWindow";
import JoinWindow from "./JoinWindow";

class StartControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nextPage: "start", name: "", roomcode: "" };
  }

  callbackFunction = (name) => {
    this.setState({ name: name });
  };

  handleCreateClick = () => {
    this.setState((state) => ({
      nextPage: "create",
    }));
  };
  handleJoinClick = () => {
    this.setState((state) => ({
      nextPage: "join",
    }));
  };
  handleBackClick = () => {
    this.setState((state) => ({
      nextPage: "start",
    }));
  };

  render() {
    var nextPage = this.state.nextPage;
    let startButtons = (
      <div>
        <button onClick={this.handleCreateClick}>Create</button>
        <button onClick={this.handleJoinClick}>Join</button>
        <button>How To Play</button>
      </div>
    );
    let nextWindow;
    if (nextPage === "start") {
      nextWindow = <div />;
    } else {
      startButtons = <div />;
      if (nextPage === "create") {
        nextWindow = <CreateWindow pCallBack={this.callbackFunction} />;
      }
      if (nextPage === "join") {
        nextWindow = <JoinWindow />;
      }
    }

    return (
      <div>
        {startButtons}
        {nextWindow}
        <button onClick={this.handleBackClick}>Back</button>
      </div>
    );
  }
}

export default StartControl;
