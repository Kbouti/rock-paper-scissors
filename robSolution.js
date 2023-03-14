console.log(`Welcome to rock paper scissors. `);

//trying the project again with some help from youtube:
//first thing I changed is I moved the javascript script tag to below the body-thus making sure it does the javascript last?
//he creates an array of the choices below:

const choices = [`rock`,`paper`,`scissors`]



function game() {
    playRound();
    //get computer choice
    //get player choice
    //compare choices
    //log result
    //keep score
}



function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice() {
    let input = prompt(`Type Rock, Paper, or Scissors`);           //get input from player
    while (input == null) {                                                   //if you cancel out of the prompt box-the input result is null. So here we're saying "if they don't answer the prompt-ask them again"
        input = prompt(`No seriously, type rock paper or scissors`);
    }

    input = input.toLowerCase();          //puts input to lower case

    let check = validateInput(input);      //If input included in the array named choices, return true, continue to log input. 
    while (check == false) {
        input = prompt(
            "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitalization doesn't matter. "
        );
        input = input.toLowerCase();
        check = validateInput(input);
    }
    console.log(input);
}

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]      //choice.length is the legth(number of things) in the choices array we defined above. So this generates a random number(0-1), multiplies by 3, takes the floor (makes 2.6=2) and then assigns the corresponding choice. 
}

function validateInput(choice) {
  choices.includes(choice)
}

game();