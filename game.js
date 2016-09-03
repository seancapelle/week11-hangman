//Randomly selects word

//Word Array
var wordList = ["jedi", "stormtrooper", "lightsaber", "yoda", "tatooine", "skywalker", "lightspeed"];

//Pick word at random
chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

// console.log("game.js " + chosenWord);

//Export to letter.js
exports.word = {
	randomWord: chosenWord,
}

