import React from "react";

class JoinWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", roomCode: "" };
  }
  handleInputChange = (event) => {
    let target = event.target;
    let value = target.value;
    let name = target.name;
    if (name === "roomCode") {
      value = value.toLowerCase();
    }
    this.setState({ [name]: value });
  };

  sendUserInfo = () => {
    this.props.pCallBack(this.state.name, this.state.roomCode);
    this.props.socket.emit("joinGame", {
      playerName: this.state.name,
      roomCode: this.state.roomCode,
    });
  };

  render() {
    return (
      <div>
        <div id="createInput">
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={this.handleInputChange}
          />
          <input
            id="roomCode"
            name="roomCode"
            type="text"
            placeholder="Enter the room code"
            onChange={this.handleInputChange}
          />

          <button
            className="starterButtons"
            onClick={this.sendUserInfo}
            id="createButton"
          >
            Join
          </button>
        </div>
      </div>
    );
  }
}
export default JoinWindow;
