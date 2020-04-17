import React from "react";
import "./App.css";
import StartControl from "./StartControl";

import io from "socket.io-client";
var socket = io.connect("http://localhost:8000");

function App() {
  return (
    <div className="App">
      <StartControl />
    </div>
  );
}

export default App;
