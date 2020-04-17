import React from "react";
import "./create.css";

function CreateWindow(props) {
  return (
    <div>
      <div id="createInput">
        <input
          id="hostName"
          type="text"
          placeholder="Enter your name (must have >2 and <20 characters)"
        />
        <button id="createButton">Create</button>
      </div>
    </div>
  );
}
export default CreateWindow;
