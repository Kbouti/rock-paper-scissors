//starting over:

console.log(`Welcome to Rock, Paper, Scissors Game`);


const choices = [`rock`,`paper`,`scissors`]

let computerScore = 0;
let playerScore = 0;

function game(){
    playRound(); 
    declareScore(computerScore, playerScore);
    playRound(); 
    declareScore(computerScore, playerScore);
    playRound(); 
    declareScore(computerScore, playerScore);
    playRound(); 
    declareScore(computerScore, playerScore);
    playRound(); 
    declareFinalScore(computerScore, playerScore);


}

function playRound() {
    const computerChoice = computerPlays();
    console.log(`Computer's choice: ${computerChoice}`);
    const playerChoice = playerPlays();
    console.log(`Player's choice: ${playerChoice}`);

  let winner = compareRound(computerChoice, playerChoice);
  if (winner == `Tie`){
    console.log(`It's a tie! Click refresh to try again`);
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
    let input = prompt(`Your turn! Type rock, paper, or scissors:`);
    input = input.toLowerCase();
    while (choices.includes(input) == false){
        input =prompt(`Try again and check your spelling`);
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
        let message = `Score is tied up at ${playScore} - ${compScore}`;
        console.log(message);
    }
}


game();

//compareRound();

