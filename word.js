//Constructor to check letters guessed against selected word

//The random word split into an array
var wordArray = [];

//Array with letters and dashes
var blanksAndSuccesses = [];

var wrongGuesses = [];

//User letter pick import from main.js
var letterImport = require('./main.js').letter;

//Grab the random word from game.js
var wordImport = require('./game.js').word;
console.log(wordImport.randomWord);

//Grab the length of the random word
var numBlanks = wordImport.randomWord.length;


//Letter constructor
function CheckLetter(letter, word, count) {
	this.letter = letter,
	this.word = word,
	this.count = count,
	this.checker = function(){
		
		//Toggle for if letter is in word
		var letterInWord = false;

		//Set the split random word into the array
		var wordArray = this.word.split("");

		//Check the array
		for(var i = 0; i < this.count; i++) {

			//Populate with dashes
			blanksAndSuccesses.push("_");

			if(wordArray[i] == this.letter) {
			
				//Set letterInWord to true
				letterInWord = true;
			}
		}

		if (letterInWord) {
			for (var i = 0; i < this.count; i++){
				
				if (wordArray[i] == this.letter) {

					//Replace dashes with letter
					blanksAndSuccesses[i] = this.letter;
				}
				else {
					// //Push letter into wrongGuesses
					wrongGuesses.push(letter);
				}
		}
		// console.log(blanksAndSuccesses.join(" "));
	}
}
}



var letterGuess = new CheckLetter(letterImport.guess.letter, wordImport.randomWord, numBlanks);

letterGuess.checker();
//Export guess
exports.guess = {
	array: blanksAndSuccesses.join(" "),
}


