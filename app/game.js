const PERKS = [
  "Never offends anyone",
  "Can talk to animals",
  "Is a ninja",
  "Best personal fitness coach",
  "Cleanest room",
  "Is an actual pokemon trainer",
  "Owns the New York Knicks",
  "Freinds with Post Malone",
  "Nascar Driver",
  "Effective farmer",
  "Best freinds with your sibilings",
  "Works for WHO",
  "Wears a scarf always",
  "Their car is the trasnformer Bumble bee",
  "Always puts jesus first",
  "is Tony Stark",
  "Tall",
  "Athletic",
  "Gets along with everyone",
  "Won't have to work while dating",
];

const REDFLAGS = [
  "Has the face of a pug",
  "Laughs like a chipmunk",
  "Constantly plotting to kill you",
  "Still in 4th grade",
  "Is david zhang",
  "Watches too much porn",
  "is a vampire",
  "Hasn't showered since birth",
  "Farts A LOT",
];

const PERKPERHAND = 4;
const RFPERHAND = 3;

class Game {
  constructor(code, host) {
    this.code = code;
    this.players = [host];
    this.isActive = false;
    this.perks = PERKS;
    this.redFlags = REDFLAGS;
    this.turn = 0;
    this.curSingle = host.name;
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

  getPlayer(playerName) {
    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].name === playerName) {
        return this.players[i].name;
      }
    }
  }

  getHands(name) {
    var hand = [];
    console.log(this.players.length);
    for (var i = 0; i < this.players.length; i++) {
      var perksARR = [];
      var redflagsARR = [];

      for (var j = 0; j < PERKPERHAND; j++) {
        var randPos = Math.floor(Math.random(0, this.perks.length));
        perksARR.push(this.perks[randPos]);
        this.perks.splice(randPos, 1);
      }
      for (var k = 0; k < RFPERHAND; k++) {
        var randPos = Math.floor(Math.random(0, this.redFlags.length));
        redflagsARR.push(this.redFlags[randPos]);
        this.redFlags.splice(randPos, 1);
      }
      var data = {
        name: this.players[i].name,
        perks: perksARR,
        redflags: redflagsARR,
      };
      hand.push(data);
    }

    return hand;
  }
}

module.exports = Game;
