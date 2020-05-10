const PERKPERHAND = 4;
const RFPERHAND = 3;

const wordsFromFile = require("./wordsFromFile.js");

class Game {
  constructor(code, host) {
    this.code = code;
    this.players = [host];
    this.isActive = false;
    this.perks = wordsFromFile("./wordfiles/classicPerks");
    this.redFlags = wordsFromFile("./wordfiles/classicRedFlags");
    this.turn = 1;
    this.curSingle = host.name;

    //at begining of every turn this.dates should be empty
    this.dates = [];
    this.hands = [];
    this.points = { [host.name]: 0 };
  }

  joinPlayer(player) {
    if (!this.isActive) {
      //inactive game\
      if (this.nameTaken(player)) {
        return false;
      } else {
        this.players.push(player);
        //bad because its using obj notation
        this.points[player.name] = 0;
        return true;
      }
    } else {
      //active game
      if (this.nameTaken(player)) {
        //rejoining
        var p = this.getPlayer(player.name);
        //cahnge to a meothd()
        p.active = true;

        return true;
      }
      return false;
    }
  }

  disconnectPlayer(playerName) {
    var p = this.getPlayer(playerName);
    p.deactivate();
    var i = 0;
  }

  getCode() {
    return this.code;
  }

  //updates turn. and changes new cur single and update game stats
  endRound(winnerName) {
    this.turn += 1;
    this.curSingle = winnerName;
    //bad cuz it assumes winner anme exists
    this.points[winnerName] += 1;
    this.hands = [];
    this.dates = [];
  }

  addRedFlagToDate(dateCreator, RFstr, dateRuiner) {
    //check if already ruined a date in this round
    for (var i = 0; i < this.dates.length; i++) {
      var curDate = this.dates[i];
      if (curDate.rfFromPlayer === dateRuiner) {
        return;
      }
    }

    const endingOne = " is perfect for you!";
    const endingTwo = " is ideal for you!";
    const endingThree = " is a flawless match for you!";
    const endingFour = " is a quintessential match for you!";
    const ENDINGS = [endingOne, endingTwo, endingThree, endingFour];

    //if not add
    for (var i = 0; i < this.dates.length; i++) {
      var curDate = this.dates[i];

      if (curDate.dateCreator === dateCreator) {
        if (curDate.rfFromPlayer === "") {
          curDate.rfFromPlayer = dateRuiner;
          curDate.rf.push(RFstr);

          var randPos = Math.floor(Math.random() * ENDINGS.length);
          curDate.dateStr += " but " + RFstr + ENDINGS[randPos];
        } else {
          //sm1 already put an RF on
        }
      }
    }
  }

  addDate(fromPlayer, perks) {
    for (var i = 0; i < this.dates.length; i++) {
      if (this.dates[i].dateCreator === fromPlayer) {
        //already submitted a match
        console.log("already submitted a match");
        return;
      }
    }
    this.dates.push({
      dateCreator: fromPlayer,
      perks: perks,
      rfFromPlayer: "",
      rf: [],
      dateStr:
        fromPlayer +
        " thinks someone who " +
        "" +
        perks[0] +
        " and " +
        perks[1],
    });
  }

  nameTaken(player) {
    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].name === player.getName()) {
        return true;
      }
    }
    return false;
  }

  getPlayer(playerName) {
    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].name === playerName) {
        return this.players[i];
      }
    }
    return false;
  }

  updateHands() {
    var hand = [];
    for (var i = 0; i < this.players.length; i++) {
      var perksARR = [];
      var redflagsARR = [];

      var posHolder = [];
      for (var j = 0; j < PERKPERHAND; j++) {
        var randPos;
        do {
          randPos = Math.floor(Math.random() * this.perks.length);
        } while (posHolder.includes(randPos));
        posHolder.push(randPos);
        perksARR.push(this.perks[randPos]);
      }
      posHolder = [];
      for (var k = 0; k < RFPERHAND; k++) {
        var randPos;
        do {
          randPos = Math.floor(Math.random() * this.redFlags.length);
        } while (posHolder.includes(randPos));
        posHolder.push(randPos);
        redflagsARR.push(this.redFlags[randPos]);
      }
      var data = {
        name: this.players[i].name,
        perks: perksARR,
        redflags: redflagsARR,
      };
      hand.push(data);
    }
    this.hands = hand;
    //console.log(this.hands);
  }
}

module.exports = Game;
