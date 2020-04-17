import React from "react";
import "./create.css";

class CreateWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { socket: this.props.socket, name: "", roomcode: "" };
  }
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  sendUserInfo = () => {
    this.props.pCallBack(this.state.name, "");
  };

  render() {
    return (
      <div>
        <div id="createInput">
          <input
            id="hostName"
            type="text"
            placeholder="Enter your name (must have >2 and <20 characters)"
            onChange={this.handleChange}
          />
          <button onClick={this.sendUserInfo}>Create</button>
        </div>
      </div>
    );
  }
}
export default CreateWindow;
