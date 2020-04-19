//const Game = require("../app/game");
class Player {
  constructor(name, isHost, socketId) {
    this.name = name;
    this.isHost = isHost;
    this.socketId = socketId;
  }

  activate(socket) {
    this.active = true;
    this.socket = socket;
  }

  deactivate() {
    this.active = false;
    this.socket = undefined;
  }
}

module.exports = Player;
