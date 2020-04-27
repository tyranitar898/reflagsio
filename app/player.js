//const Game = require("../app/game");
class Player {
  constructor(name, isHost, socketId) {
    this.name = name;
    this.isHost = isHost;
    this.socketId = socketId;
    this.active = true;
  }

  getName() {
    return this.name;
  }

  activate() {
    this.active = true;
  }

  deactivate() {
    this.active = false;
  }
}

module.exports = Player;
