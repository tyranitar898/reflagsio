const PERKPERHAND = 4;
const RFPERHAND = 3;

class Game {
  constructor(code, host) {
    this.code = code;
    this.players = [host];
    this.isActive = false;
    this.perks = [
      "never offends anyone",
      "can talk to animals",
      "is a ninja",
      "is the best personal fitness coach",
      "has the cleanest room",
      "is an actual pokemon trainer",
      "owns the New York Knicks",
      "is freinds with Post Malone",
      "is a Nascar Driver",
      "is an effective farmer",
      "is best freinds with your sibilings",
      "works for WHO",
      "wears a scarf always",
      "owns the trasnformer Bumble Bee",
      "always puts Jesus first",
      "is Tony Stark",
      "could've played in the NBA",
      "is an athletic freak",
      "gets along with everyone",
      "won't have to work while dating",
      "writes poetry",
      "loves dogs",
      "is a famous rapper",
      "loves video games",
      "wins every board game",
      "has a big butt",
      "always gives you the perfect gift",
      "has all the same hobbies as you",
      "owns a successful startup",
      "believes you are the most attractive person they've seen",
      "has a magical glass full of infinite beer",
      "found the golden ticket and now owns Willy Wonka's chocolate factory",
      "owns your favourite sports team",
      "is supportive",
      "is adventurous",
      "has your parents' full approval",
      "loves cats",
      "is a hot barista",
      "is Tik Tok famous",
      "owns a pony farm",
      "respects your boundaries",
      "has the job you always wanted",
      "can shapeshift into any animal",
      "only takes one trip to bring groceries",
      "makes sure you're always oiled up",
      "is a pro fighter",
      "owns your favorite museum",
      "is exempt from paying taxes while dating you",
      "treats your parents well",
      "is a celebrity",
      "is the smoothest talker",
      "is made completely out of your favourite candy",
      "is great at kissing your neck",
      "doesn't need to sleep ever",
      "is world's best advertising executive",
      "is best selling author",
      "has abs that are a work of art",
      "has an ass tighter than a snare drum",
      "owns a time machine",
      "has 3 pet dragons",
      "can train you to be a jedi",
      "is Prince/Princess of Asgard",
      "owns a unicorn",
      "lives in a castle",
      "gives millions to charity",
      "lets you have a vacation in any fictonal world",
      "owns your favourite internet pet",
      "is a famous drummer",
      "grants you a wish everytime you orgasm",
      "can take you surfing on any wave",
      "can take you to space",
      "makes michelin star level food",
      "is Amazon© (the company)",
      "loves to cuddle",
      "the lead singer of your favorite brand",
      "completely blind to all your flaws",
      "finishes your leftovers",
      "can sing like Shawn Mendes",
      "has perfect pitch",
      "every time they spank you $100 appears in your bank account",
      "gives you mind shattering orgasm that leaves you sore for days",
      "heir to the throne of Gondor",
      "rules over westoros",
      "can fly",
      "friends with Harry Styles",
      "can teleport",
      "is an Avenger",
      "gives great massages",
      "wants to travel the world with you",
      "randomly surprises you with flowers",
      "can instantly cure you of any disease",
    ];
    this.redFlags = [
      "has the face of a pug",
      "laughs like a chipmunk",
      "is constantly plotting to kill you",
      "is still in 4th grade",
      "is David Zhang",
      "watches too much porn",
      "is a vampire",
      "hasn't showered since birth",
      "farts A LOT",
      "describes all food as yummy yummy",
      "calls their pets their children",
      "regularly hosts Tea Parties for dolls",
      "can't do basic addition",
      "walks around the house naked",
      "never cooks",
      "is the most toxic gamer",
      "ubers everywhere",
      "will eat everything even if its not food",
      "shits while cumming",
      "has pubes with dreadlocks",
      "is still in jail",
      "is a clown pimp",
      "recites all the lines from Titanic in their sleep",
      "open mouth kisses their pet",
      "melts when wet",
      "throws up every time she sees your face",
      "has hair transplants from dead butts",
      "counts your calories",
      "looks and smells like your dad",
      "constantly freestyles badly",
      "never flushes the toilet",
      "does couples therapy on first date",
      "only wears pink underwear",
      "steals all the blankets from you",
      "sleeps upside down",
      "has to cuddle your feet to sleep",
      "snores to the tune of the star-spangled banner",
      "never turns off the sink",
      "doesn’t use toilet paper to wipe",
      "needs you to chew their food for them",
      "texts one word at a time",
      "has a pig’s snout",
      "bites his phone",
      "has STDS",
      "can never make you cum",
      "proposes on the first date",
      "baby talks to you during sex",
      "sends nudes of their parents to you",
      "asks to suck your toes as foreplay",
      "always pees on you during sex",
      "must peek at you while you shower",
      "always compares you to her dad",
      "walks around like a kangaroo",
      "farts every time someone says their name",
      "has a surgically attached fanny pack",
      "asks you to push their belly button every 45 minutes",
      "always suddenly remembers they forgot to turn off the oven 15 minutes into the drive and turns the car around",
      "always argues with you that the earth is flat",
      "eats with their feet",
      "says he/she is an “entrepreneur” but actually sits around and reads Reddit all day",
      "claps after sex",
      "rates your performance after sex",
      "can never make you cum",
      "screams Make America Great Again when he/she cums",
      "extremely rude to everyone else",
      "keeps mosquitoes as pets",
      "uses chili for lube",
      "can only get turned on when they’re wearing your clothes",
      "complains about their food to the waiter at every restaurant",
      "only talks about themselves in the third person",
      "spoils every TV show you watch",
      "flirts with all you friends(both genders;))",
      "writes erotic Donald Trump fan fiction",
      "has a visible erection at all times",
      "constantly checks Apple Watch during sex",
      "can only cum while watching Bees",
      "has already had 5 divorces",
      "pulls one of your hair out every time you walk through a door",
      "killed Dumbledore",
      "constantly getting kidnapped by Bowser",
      "refuses to cover face while sneezing",
      "can not drive",
      "gets off from your friends’ feet pics",
      "thinks global warming is fake",
      "is an anti-vaxxer",
      "hates pineapples and hotdogs",
      "chews with mouth open",
      "swallows their bubble tea whole",
      "collects straws",
      "puts milk in before the cereal",
      "is still breastfeeding from their mom",
      "uses Crayola© as make up",
      "cares for their Tamagotchi more than they care for you",
      "only wears sunglasses indoors",
      "fights every pigeon he sees",
      "chews by manually moving their jaw up and down",
      "voluteers at pornhub",
      "refers to you as honey, sugar, flour, ½ teaspoon of salt",
      "can only walk horizontally",
      "collects your pubes",
      "must spin when talking",
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
