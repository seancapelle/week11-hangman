//Logic



//Pull Inquirer package
var inquirer = require('inquirer');


//Main -> Game -> Letter -> Main ->  

//Ask user
inquirer.prompt([{
    name: "letter guess",
    message: "Which letter do you guess?"
} 
]).then(function(answers) {
    
    //Assign answer to userGuess
    var userGuess = answers;

  	console.log(userGuess);
})

