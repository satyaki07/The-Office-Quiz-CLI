var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

var userName = readlineSync.question(chalk.yellow("Enter Your Name: "));
console.log(chalk.yellow('|| Welcome ') + chalk.blue.bold(userName) + chalk.yellow(' to ') + chalk.bgYellow.bold('The Office Quiz') + chalk.yellow(' ||'));

// function play(question, answer) {
//   var userAnswer = readlineSync.question(question);

//   if (userAnswer.toUpperCase() === answer.toUpperCase()) {
//     console.log(chalk.bgGreen.bold("Correct!"));
//     score = score + 1;
//   } else {
//     console.log(chalk.bgRed.bold("Wrong!"));
//   }
//   console.log(chalk.yellow('Current Score: ') + chalk.yellow.bold(score));
//   console.log(chalk.yellow('-----------------------'));
// }

function play(question, options, answer) {
  // console.log('dhvkhdfhd')
  console.log('\n' + chalk.yellow(question));
  var userAnswer = readlineSync.keyInSelect(options);
  // console.log(userAnswer)
  if (userAnswer !== -1) {
    if (options[userAnswer].toUpperCase() === options[answer].toUpperCase()) {
    console.log(chalk.bgGreen.bold("Correct!"));
    score = score + 1;
    } else {
      console.log(chalk.bgRed.bold("Wrong!"));
    }
  }
  
  console.log(chalk.yellow('Current Score: ') + chalk.yellow.bold(score));
  console.log(chalk.yellow('-----------------------'));
  console.log();
}

// play("What is my name? ", 'Bebeto');
var questions = [{
  question: "Which of these is Dwight\'s \'unofficial' title?",
  options: ["Assistant Manager", "Assistant Regional Manager", "Co-Manager", "Assistant to the Regional Manager"],
  answer: 3
  },
  {
  question: 'What\'s Pam\'s favorite flavor of yogurt?',
  options: ['Vanilla', 'Strawberry', 'Mixed berry', "Chocolate"],
  answer: 2
  },
  {
  question: "What brand is Michael wearing on the day he accidentally wearing a woman's suit?",
  options: ["MISSterious", "MISStery", "Sassypants", "Boss Lady"],
  answer: 0
  },
  {
    question: "How much money does Michael pledge for the Walk-A-Thon?",
    options: ["$2 a mile", "$25 a mile", "$50 a mile", "$20 a mile"],
    answer: 1
  },
  {
    question: "Who are the two teams playing basketball?",
    options: ["Warehouse vs Vance Refrigeration", "Sales vs Accounting", "Men vs Women", "Warehouse vs The Office"],
    answer: 3
  },
  {
    question: "What does Katy come to the office to sell?",
    options: ["Coffee", "Purses", "Copier", "Desk Chairs"],
    answer: 1
  },
  {
    question: "What are the annual in-office awards called?",
    options: ["The Scotties", "The Mifflies", "The Dundies", "The Pappies"],
    answer: 2
  },
  {
    question: "What is the name of the action film written and directed by Michael Scott?",
    options: ["Threat Level Midnight", "Warehouse Warriors", "Michael Scarn Returns", "Hot Office Nights"],
    answer: 0
  },
  {
    question: "Where did Jim propose Pam?",
    options: ["Chilli's", "Warehouse", "Gas Station", "In his Desk"],
    answer: 2
  },
  {
    question: "How many minutes has Michael Scott worked at Dunder Mifflin?",
    options: ["9,976,000", "9,966,000", "9,986,000", "9,998,000"],
    answer: 2
  }
];

for (var i=0; i<questions.length; i++) {
  var curQuestion = questions[i];
  play(curQuestion.question, curQuestion.options, curQuestion.answer);
}

console.log(chalk.bgCyan.bold('YAY!! You scored') + chalk.cyan.bold(' ' + score));