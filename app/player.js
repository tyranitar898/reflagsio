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
}

module.exports = Player;
