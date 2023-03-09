console.log(`Welcome to rock paper scissors. `);

let rock = 'Rock';
let paper = 'Paper';
let scissors = 'Scissors';
let computerChoice;
let playerChoice;
let scoreComputer = 0;
let scorePlayer = 0;



function computerPlays() {
    let i = Math.round((Math.random() * 100));
    if (i >= 66 ) {       
        let computerChoice = rock;
     console.log(`Computer's choice: ` + rock);
     return computerChoice;

    } else if (i >= 33) {
        let computerChoice = paper;
        console.log(`Computer's choice: ` + paper);
        return computerChoice;

    } else {
        let computerChoice = scissors;
        console.log(`Computer's choice: ` + scissors);
        return computerChoice;

    }

}


function playerPlays() {                                                                        //Create function to ask player for their choice
    let playerInput = prompt("Your choice! Please enter rock, paper, or scissors.");            //Create variable playerInput and set it equal to the answer to the questions
    let inputUpperCase =  playerInput.toUpperCase(); 
    //String(inputUpperCase);                
    if (inputUpperCase === 'ROCK') {
        playerChoice = rock;
    }
    else if (inputUpperCase === 'PAPER') {
        playerChoice = paper;
    }
    else if (inputUpperCase === 'SCISSORS') {
        playerChoice = scissors;
    } 
    console.log(`Player's choice: ` + playerChoice);
    return playerChoice;
}


computerPlays(), playerPlays();


if (playerChoice === rock){
    console.log('here we got a rock');
}

if (computerChoice === rock){
    console.log('computer got a rock');
}