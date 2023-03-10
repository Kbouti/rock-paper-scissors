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


let computerTurn = computerPlays();
let playerTurn = playerPlays();


if ((computerTurn == rock) && (playerTurn == rock)) {
    console.log(`rock and rock, it's a tie!`);
}
else if ((computerTurn == paper) && (playerTurn == paper)) {
    console.log(`paper and paper, it's a tie!`);
}
else if ((computerTurn == scissors) && (playerTurn == scissors)) {
    console.log(`scissors and scissors, it's a tie!`);
}

//above scenarios tie

else if ((computerTurn == rock) && (playerTurn == paper)) {
    console.log(`Congratulations! Paper beats rock, player wins`);
}

else if ((computerTurn == rock) && (playerTurn == scissors)) {
    console.log(`Sorry, rock beats scissors. You lose. `);
}

//above situations computer plays rock (not tie)

else if ((computerTurn == paper) && (playerTurn == scissors)) {
    console.log(`Congratulations! Scissors beat paper, player wins`);
}

else if ((computerTurn == paper) && (playerTurn == rock)) {
    console.log(`Sorry, paper beats rock. You lose. `);
}

//above situations computer plays paper (not tie)

else if ((computerTurn == scissors) && (playerTurn == rock)) {
    console.log(`Congratulations! rock beat scissors, player wins`);
}

else if ((computerTurn == scissors) && (playerTurn == paper)) {
    console.log(`Sorry, scissors beats paper. You lose. `);
}

else {
    console.log(`something went wrong, you probably miss-spelled your input`);
}



// The below code block will compare reuslts and declare if it was a tie or not. I'm putting that on hold to try to compare for result. 

/*
if (computerTurn == playerTurn) {
    console.log(`it's a tie!`)
}
else {
    console.log(`It wasn't a tie.... (calculating winner)`);
    
}
*/

