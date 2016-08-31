//Constructor to make letter or dash display

var lettersInChosenWord = [];
var numBlanks = 0;
var dashedArray = [];

//Grab the game.js info
var wordImport = require('./game.js').word;

console.log(wordImport);

//Break word into individual letters
lettersInChosenWord = wordImport.randomWord.split("");

console.log(lettersInChosenWord);

//Set number of blanks
numBlanks = lettersInChosenWord.length;

console.log(numBlanks);

//Word constructor
function Generator(word, count) {
	this.word = word,
	this.count = count,
	this.display = function() {

		//Populate dashes for chosenWord
		for (var i = 0; i < numBlanks; i++) {
			// console.log("_");
			dashedArray.push("_");
			
		}
		//Display the dashed word
		console.log(dashedArray.join(" "));
	}
}

//Feed dashedWord into constructor
var dashedWord = new Generator(wordImport, numBlanks);

//Push to console
dashedWord.display();