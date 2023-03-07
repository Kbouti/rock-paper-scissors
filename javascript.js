console.log(`Welcome to rock paper scissors. `);

let rock = 'Rock';
let paper = 'Paper';
let scissors = 'Scissors';
let computerChoice;
let playerChoice;



function computerPlays() {
    let i = Math.round((Math.random() * 100));
    if (i >= 66 ) {       
        let computerChoice = rock;
     console.log(`Computer's choice: ` + rock);
    } else if (i >= 33) {
        let computerChoice = paper;
        console.log(`Computer's choice: ` + paper);
    } else {
        let computerchoice = scissors;
        console.log(`Computer's choice: ` + scissors);
    }
}


function playerPlays() {                                                                        //Create function to ask player for their choice
    let playerInput = prompt("Your choice! Please enter rock, paper, or scissors.");            //Create variable playerInput and set it equal to the answer to the questions
    console.log(`Player's input: ` + playerInput);                                                                   //log that input
    let inputUpperCase =  playerInput.toUpperCase();                   //Put the input in all caps                                                                      
    if (inputUpperCase === 'ROCK') {
        let playerChoice = rock;
    }
    else if (inputUpperCase == 'PAPER') {
        let playerChoice = paper;
    }
    else if (inputUpperCase == 'SCISSORS') {
        let playerChoice = scissors;
    }

    console.log(`Player's choice: ` + playerChoice);
    console.log(inputUpperCase);
}




computerPlays();

playerPlays();

