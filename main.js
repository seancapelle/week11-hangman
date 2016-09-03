//Logic

//Pull Inquirer package
var inquirer = require('inquirer');

//Displays the random word from game.js as dashes
function startGame(){

	var dashImport = require('./letter.js').dash;
}

//User guesses letter
function userInput(){
	//Ask user
	inquirer.prompt([{
	    name: "letter guess",
	    message: "Which letter do you guess?"
	}])
	.then(function(answers) {
	    
	    //Assign answer to userGuess
	    var userGuess = answers;
	    
	    //Export userGuess
	    exports.letter = {	
		guess: userGuess,
		}
	})
}

function checkGuess(){

//Import word.js
}

function endGame(){
	
	if (lettersInChosenWord.toString() == blanksAndSuccesses.toString()) {
			
			console.log("The Force is with you!");

			//Restart the game
			startGame();
		}

	//If no more guesses
	else if (numGuesses == 0) {

		console.log("That is why you fail.");

		//Restart game
		startGame();
	}
}

startGame();

userInput();

checkGuess();

endGame();