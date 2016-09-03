//Randomly selects word

//Word Array
var wordList = ["JEDI", "STORMTROOPER", "LIGHTSABER", "YODA", "TATOOINE", "SKYWALKER", "LIGHTSPEED"];

//Pick word at random
chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

// console.log("game.js " + chosenWord);

//Export to letter.js
exports.word = {
	randomWord: chosenWord,
}

