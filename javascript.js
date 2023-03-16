console.log(`Welcome to Rock, Paper, Scissors. Enter "game()" below to get started.`);


const choices = [`rock`,`paper`,`scissors`];

let computerScore = 0;
let playerScore = 0;

function game(){
    for (let i = 0; i < 5; i++) {
        playRound();
        declareScore(computerScore, playerScore);
    }
    declareFinalScore(computerScore, playerScore);
   computerScore = computerScore * 0;
   playerScore = playerScore * 0;

}



function playRound() {
    const playerChoice = playerPlays();
    console.log(`Player's choice: ${playerChoice}`);
    const computerChoice = computerPlays();
    console.log(`Computer's choice: ${computerChoice}`);


  let winner = compareRound(computerChoice, playerChoice);
  if (winner == `Tie`){
    console.log(`It's a tie!`);
  }
  else if (winner ==`Player`) {
    console.log(`Player wins!` );
    playerScore = playerScore + 1;
  }
  else {console.log(`You lose..`);
    computerScore = computerScore +1;
}
//declareScore(computerScore, playerScore);

}

function computerPlays(){
    return choices[Math.floor(Math.random()*choices.length)]
    
}

function playerPlays(){
    let input = prompt(`Type rock, paper, or scissors:`);
    input = input.toLowerCase();
    while (choices.includes(input) == false){
        input =prompt(`Try again and check your spelling.`);
    }
    input = input.toLowerCase();
    return input;
}

function compareRound(choiceC, choiceP) {
    if (choiceC == choiceP) {
        return `Tie`;
    }
    else if (((choiceC == `rock`) && (choiceP == `paper`)) || ((choiceC == `paper`) && (choiceP == `scissors`)) || ((choiceC == `scissors`) && (choiceP == `rock`))){
        return `Player`;
    }
    else{
        return `Computer`;
    }
}

function declareScore(compScore, playScore){
    if (compScore > playScore) {
        let message = `Computer is winning, the score is ${compScore} - ${playScore}`;
        console.log(message);
    }
    else if (compScore < playScore) {
        let message = `Player is winning, the score is ${playScore} - ${compScore}`;
        console.log(message);
    }
    else {
        let message = `Score is tied up at ${playScore} - ${compScore}`;
        console.log(message);
    }
}



function declareFinalScore(compScore, playScore){
    if (compScore > playScore) {
        let message = `The final score is  ${compScore} - ${playScore}. You're a loser`;
        console.log(message);
    }
    else if (compScore < playScore) {
        let message = `You win! The final score is ${playScore} - ${compScore}`;
        console.log(message);
    }
    else {
        let message = `${playScore} - ${compScore} It's a draw. Enter game() in the console to play another match, or tieBreaker() to determine a winner`;
        console.log(message);
    }
}


function tieBreaker(){
    const playerChoice = playerPlays();
    console.log(`Player's choice: ${playerChoice}`);
    const computerChoice = computerPlays();
    console.log(`Computer's choice: ${computerChoice}`);


  let winner = compareRound(computerChoice, playerChoice);
  if (winner == `Tie`){
    tieBreaker();
    }
  else if (winner ==`Player`) {
    console.log(`Player wins!` );
    }
  else {console.log(`You lose..`);
    }
}



//game();

