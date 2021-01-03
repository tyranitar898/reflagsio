const fs = require("fs");
const path = require("path");

//const { MIN_WORDS } = require("./const");

function wordsFromFile(wordfile) {
  const filepath = path.join(__dirname, `/${wordfile}`);
  const contents = fs.readFileSync(filepath, "utf8");
  const words = contents.trim().split(/\r?\n/);
  return words;
}

module.exports = wordsFromFile;
