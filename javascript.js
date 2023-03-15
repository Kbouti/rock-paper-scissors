//starting over:

console.log(`Welcome to Rock, Paper, Scissors Game`);


const choices = [`rock`,`paper`,`scissors`]

let computerScore = 0;
let playerScore = 0;

function game(){
    playRound(); 
    playRound();
    playRound(); 
    playRound(); 
    playRound(); 

        //get computer choice
        //get player choice
        //compare choices
        //adjust score

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
    declareScore(computerScore, playerScore);
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
        let message = `You're winning! The score is ${playScore} - ${compScore}`;
        console.log(message);
    }
    else {
        let message = `It's a tie, refresh to keep playing`;
        console.log(message);
    }
}

game();

//compareRound();

