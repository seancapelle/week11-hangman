//Constructor to check letters guessed against selected word

//PUSH DASHED ARRAY INTO BLANKS AND SUCCESSES
var blanksAndSuccesses = [];


//Letter constructor
function CheckLetter(letter) {
	this.letter = letter,
	this.checker = function(){

		//Toggle for if letter is in word
		var letterInWord = false;

		for(var i = 0; i < numBlanks; i++) {

			if(chosenWord[i] == letter) {
				
				//Set letterInWord to true
				letterInWord = true;
			}
		}

		if (letterInWord) {
			for (var i = 0; i < numBlanks.length; i++){
				
				if (chosenWord[i] == letter) {

					//Replace dashes with letter
					blanksAndSuccesses[i] = letter;
				}
				else {
					//Push letter into wrongGuesses
					wrongGuesses.push(letter);

					//Minus one guess
					numGuesses --;
				}
		}
	}
}

//User pick import
var letterImport = require('./main.js').letter;
console.log("Letter import is: ");
console.log(letterImport);

//Random word import
var wordImport = require('./game.js').word;

var letterGuess = new CheckLetter(letterImport);

letterGuess.checker();

