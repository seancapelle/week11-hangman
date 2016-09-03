//Constructor to make letter or dash display

var lettersInChosenWord = [];
var numBlanks = 0;
var dashedArray = [];

//Grab the game.js random word
var wordImport = require('./game.js').word;

console.log(wordImport);

//Break word into individual letters
lettersInChosenWord = wordImport.randomWord.split("");

//Set number of blanks
numBlanks = lettersInChosenWord.length;


//Word constructor
function Generator(wordImport, numBlanks) {
	this.word = wordImport,
	this.count = numBlanks,
	this.display = function() {

		//Populate dashes for chosenWord
		for (var i = 0; i < this.count; i++) {

			dashedArray.push("_");
			
		}

		//Display the dashed word
		console.log(dashedArray.join(" "));
	}
}

//Feed dashedWord into constructor
var dashedWord = new Generator(wordImport, numBlanks);


exports.dash = {
	dashedWord: dashedWord.display(),
}
//Push to console
// dashedWord.display();