import React from "react";

class CreateWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { socket: this.props.socket, name: "", roomcode: "" };
  }
  handleInputChange = (event) => {
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
            placeholder="Enter your name"
            onChange={this.handleInputChange}
          />

          <button className="starterButtons" onClick={this.sendUserInfo}>
            Create
          </button>
        </div>
      </div>
    );
  }
}
export default CreateWindow;

/* <input
            id=""
            type="text"
            placeholder="Number of perks each round"
            onChange={this.handleInputChange}
          />
          <input
            id=""
            type="text"
            placeholder="Number of red flags each round"
            onChange={this.handleInputChange}
          />*/
