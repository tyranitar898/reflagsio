const PERKPERHAND = 4;
const RFPERHAND = 3;

class Game {
  constructor(code, host) {
    this.code = code;
    this.players = [host];
    this.isActive = false;
    this.perks = [
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
      "Always puts Jesus first",
      "is Tony Stark",
      "Tall",
      "Athletic",
      "Gets along with everyone",
      "Won't have to work while dating",
      "Writes poetry",
      "Loves dogs",
      "Famous rapper",
      "Loves video games",
      "Owns every board game",
      "Big butt",
      "Always gives you the perfect gift",
      "Has all the same hobbies as you",
      "Owns a successful startup",
      "Believes you are the most attractive person they've seen",
      "Has a magical glass full of infinite beer",
      "Found the golden ticket and now owns Willy Wonka's chocolate factory",
      "Owns your favourite sports team",
      "Supportive",
      "Adventurous",
      "Your parents love them",
      "Love cats",
      "The hot barista",
      "Is Tik Tok famous",
      "Owns a pony farm",
      "Respects your boundaries",
      "Has the job you always wanted",
      "Can shapeshift into any animal",
      "Only takes one trip to bring groceries",
      "Makes sure you're always oiled up",
      "Professional fighter",
      "Owns your favorite museum",
      "You will be exept from paying taxes while dating them",
      "Treats your parents well",
      "Celebrity",
    ];
    this.redFlags = [
      "Has the face of a pug",
      "Laughs like a chipmunk",
      "Constantly plotting to kill you",
      "Still in 4th grade",
      "Is David Zhang",
      "Watches too much porn",
      "is a vampire",
      "Hasn't showered since birth",
      "Farts A LOT",
      "Describes all food as yummy yummy",
      "Calls their pets their children",
      "Regularly hosts Tea Parties for dolls",
      "Can't do basic addition",
      "Walks around the house naked",
      "Never cooks",
      "Most toxic gamer",
      "Ubers everywhere",
      "Will eat everything even if its not food",
      "Shits while cumming",
      "Their pubes have dreadlocks",
      "Still in jail",
    ];
    this.turn = 1;
    this.curSingle = host.name;

    //at beinging of every turn this.dates shoudl be empty
    this.dates = [];
    this.hands = [];
    this.points = { [host.name]: 0 };
  }

  joinPlayer(player) {
    if (!this.isActive) {
      //inactive game\

      this.players.push(player);
      //bad because its using
      this.points[player.name] = 0;
      return true;
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
    p.active = false;
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

  addDate(fromPlayer, perks) {
    for (var i = 0; i < this.dates.length; i++) {
      if (this.dates[i].from === fromPlayer) {
        //already submitted a match
        console.log("already submitted a match");
        return;
      }
    }
    this.dates.push({ from: fromPlayer, perks: perks });
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

      for (var j = 0; j < PERKPERHAND; j++) {
        var randPos = Math.floor(Math.random(0, this.perks.length));
        //need [0] cuz splice returns an array of the one element popped
        //also shoudl tihnk abotu handling the empty array return case
        perksARR.push(this.perks.splice(randPos, 1)[0]);
      }
      for (var k = 0; k < RFPERHAND; k++) {
        var randPos = Math.floor(Math.random(0, this.redFlags.length));
        redflagsARR.push(this.redFlags.splice(randPos, 1)[0]);
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
