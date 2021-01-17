import React from "react";

class CreateWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: this.props.socket,
      name: "",
      roomcode: "",
      optionalPerkNum: 6,
      optionalRfNum: 4,
    };
  }
  handleInputChange = (event) => {
    let target = event.target;
    let value = target.value;
    let name = target.name;
    this.setState({ [name]: value });
  };

  sendUserInfo = () => {
    this.props.pCallBack(this.state.name, "");
    this.props.socket.emit("createGame", {
      playerName: this.state.name,
      optionalPerkNum: this.state.optionalPerkNum,
      optionalRfNum: this.state.optionalRfNum,
    });
  };

  render() {
    return (
      <div>
        <div id="createInput">
          <input
            type="text"
            placeholder="Enter your name"
            onChange={this.handleInputChange}
            name="name"
          />
          <input
            type="text"
            placeholder="Enter # of perks (6 by default)"
            onChange={this.handleInputChange}
            name="optionalPerkNum"
          />
          <input
            type="text"
            placeholder="Enter # of red flags (4 by default)"
            onChange={this.handleInputChange}
            name="optionalRfNum"
          />
        </div>
        <button className="starterButtons" onClick={this.sendUserInfo}>
          Create
        </button>
      </div>
    );
  }
}
export default CreateWindow;

/*
<input
            id=""
            type="text"
            placeholder="Number of perks each round"
            onChange={this.handleInputChange}
            name="optionalPerkNum"
          />
          <input
            id=""
            type="text"
            placeholder="Number of red flags each round"
            onChange={this.handleInputChange}
            name="optionalRfNum"
          />*/
