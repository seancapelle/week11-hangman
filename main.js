//Logic



//Pull Inquirer package
var inquirer = require('inquirer');




//Ask user
inquirer.prompt([{
    name: "letter guess",
    message: "Which letter do you guess?"
} 
]).then(function(answers) {
    
    var newWords = new WordBank(answers.noun, answers.verb, answers.adjective);

  	newWords.sentence();
})

// function WordBank(noun, verb, adjective, story) {

// 	this.noun = noun,
// 	this.verb = verb.
// 	this.adjective = adjective,
// 	this.story = story,
// 	this.sentence = function() {
// 		console.log(this.noun + this.verb + this.adjective);
// 	}
// }