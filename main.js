var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");

var question1 =  new BasicCard("What does Rick yell all the time", "Carl");
var question2 = new ClozeCard("Hershel head got decapitated", "Hershel");
console.log("Walking Dead Trivia!");
//first flashcard
inquirer.prompt([

{
  type: "input",
  message: question1.front,
  name: "firstFlashCard",
},

])
.then(function(user){

  if(user.firstFlashCard == "Carl" || user.firstFlashCard == "carl"){
    console.log("Correct! the answer is" + " " + question1.back);
  }
  else{
    console.log("Incorrect! the answer is" + " " + question1.back);
  }
  //second flashcard
  inquirer.prompt([

  {
    type: "input",
    message: question2.partial,
    name: "secondFlashCard",
  },

  ])
  .then(function(user){
    if(user.secondFlashCard == "Hershel" || user.secondFlashCard == "hershel"){
      console.log("Yes!," + " " + question2.fullText);
  }
    else{
      console.log("Nope," + " " + question2.fullText);
  }
  });

});
