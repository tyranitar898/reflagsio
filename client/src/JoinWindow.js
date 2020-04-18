import React from "react";
import "./create.css";

class JoinWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", roomCode: "" };
  }
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  sendUserInfo = () => {
    this.props.pCallBack(this.state.name, this.state.roomCode);
  };

  render() {
    return (
      <div>
        <div id="createInput">
          <input
            id="name"
            type="text"
            placeholder="Enter your name (must have >2 and <20 characters)"
            name="name"
            onChange={this.handleChange}
          />
          <input
            id="roomCode"
            name="roomCode"
            type="text"
            placeholder="Enter the room code"
            onChange={this.handleChange}
          />

          <button onClick={this.sendUserInfo} id="createButton">
            Join
          </button>
        </div>
      </div>
    );
  }
}
export default JoinWindow;
