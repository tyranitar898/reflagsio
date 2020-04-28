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
      "is a celebrity",
      "Smoothest talker",
      "Made completely out of your favourite candy",
      "Great at kissing your neck",
      "A night person",
      "World's best advertising executive",
      "Best selling author",
      "Has abs that are a work of art",
      "Has an ass tighter than a snare drum",
      "Owns a time machine",
      "Has 3 pet dragons",
      "Can train you to be a jedi",
      "Prince/Princess of Asgard",
      "Owns a unicorn",
      "Lives in a castle",
      "Gives millions to charity",
      "Vacation in any fictonal world",
      "Owns your favourite internet pet",
      "Famous drummer",
      "Grants you a wish everytime you orgasm",
      "Professional surfer",
      "Rocket Scientist",
      "Professional chef",
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
      "Clown pimp",
      "Recites all the lines from Titanic in their sleep",
      "Open mouth kisses their pet",
      "Melts when wet",
      "Throws up every time she sees your face",
      "Hair transplants from dead butts",
      "Counts your calories",
      "Looks and smells like your dad",
      "Constantly freestyles badly",
      "Never flushes the toilet",
      "Couples therapy on first date",
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
        var randPos1 = Math.floor(Math.random() * this.perks.length);
        //need [0] cuz splice returns an array of the one element popped
        //also shoudl tihnk abotu handling the empty array return case
        //perksARR.push(this.perks.splice(randPos, 1)[0]);
        perksARR.push(this.perks[randPos1]);
      }
      for (var k = 0; k < RFPERHAND; k++) {
        var randPos2 = Math.floor(Math.random() * this.redFlags.length);
        //redflagsARR.push(this.redFlags.splice(randPos, 1)[0]);
        redflagsARR.push(this.redFlags[randPos2]);
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
