import React from "react";
import "./create.css";

function JoinWindow(props) {
  return (
    <div>
      <div id="createInput">
        <input
          id="hostName"
          type="text"
          placeholder="Enter your name (must have >2 and <20 characters)"
        />
        <input id="roomCode" type="text" placeholder="Enter the room code" />
        <button id="createButton">Join</button>
      </div>
    </div>
  );
}
export default JoinWindow;
