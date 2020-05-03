import React from "react";
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function GameLobby(props) {
  const players = props.game.players;
  const listItems = players.map((player) => (
    // Correct! Key should be specified inside the array.
    <ListItem key={player.name} value={player.name} />
  ));
  return (
    <div>
      <h1 id="GameLobby">
        Welcome to Red flags game lobby: <strong>{props.game.code}</strong>
      </h1>
      <h1>Waiting for others to join... (only the host can start the game)</h1>
      <ul>{listItems}</ul>
    </div>
  );
}
export default GameLobby;
