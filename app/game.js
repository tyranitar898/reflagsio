class Game {
  constructor(code, host) {
    this.code = code;
    this.players = [host];
    this.isActive = false;
    this.perks = [
      "is Tony Stark",
      "Tall",
      "Athletic",
      "Gets along with everyone",
      "Won't have to work while dating",
    ];
    this.redFlags = [
      "has the face of a pug",
      "laughs like a chipmunk",
      "Constantly plotting to kill you",
      "still in 4th grade",
      "is david zhang",
      "watches too much porn",
      "is a vampire",
    ];
    this.turn = 0;
  }

  addPlayer(player) {
    if (!this.isActive) {
      this.players.push(player);
    } else {
      //handle already started game
    }
  }

  getCode() {
    return this.code;
  }
}

module.exports = Game;
