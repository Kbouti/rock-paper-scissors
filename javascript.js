console.log(`Welcome to Rock, Paper, Scissors. Enter "game()" below to get started.`);


const choices = [`rock`,`paper`,`scissors`];                    //designates the choices to be used by the computer
let computerScore = 0;                                          //start intial score at zero
let playerScore = 0;

function game(){                                                
    for (let i = 0; i < 5; i++) {                               //play round and them display score 5 times.
        playRound();
        declareScore(computerScore, playerScore);
    }
    declareFinalScore(computerScore, playerScore);              //Returns the scores but this time offers a tie breaker if the score is a tie.
    computerScore = computerScore * 0;                          //resets the score to zero. 
    playerScore = playerScore * 0;
}

function playRound() {
    const playerChoice = playerPlays();                             //get playerchoice from function. Log choice in the console on the next line
    console.log(`Player's choice: ${playerChoice}`);
    const computerChoice = computerPlays();
    console.log(`Computer's choice: ${computerChoice}`);
    let winner = compareRound(computerChoice, playerChoice);        //determines a winner and declares the result
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
}

function computerPlays(){
    return choices[Math.floor(Math.random()*choices.length)]                //uses a random number to pick one of the choices from the choices array at the top of the page
}

function playerPlays(){
    let input = prompt(`Type rock, paper, or scissors:`);                   //Asks the player for input and makes it lowercase.  If it isn't a valid selection it asks again
    input = input.toLowerCase();
    while (choices.includes(input) == false){
        input = prompt(`Try again and check your spelling.`);
    }
    input = input.toLowerCase();
    return input;
}

function compareRound(choiceC, choiceP) {                                   //Compares choices. Tie is easy, then player wins scenarios. If it isn't a tie or a player win, the computer wins. 
    if (choiceC == choiceP) {
        return `Tie`;
    }
    else if (
        ((choiceC == `rock`) && (choiceP == `paper`)) ||                    //Situations where player wins
        ((choiceC == `paper`) && (choiceP == `scissors`)) ||
        ((choiceC == `scissors`) && (choiceP == `rock`))
        )
    {
        return `Player`;
    }
    else{
        return `Computer`;
    }
}

function declareScore(compScore, playScore){                                                    //Declares the score of for the round
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

function declareFinalScore(compScore, playScore){                                                             //Declares the score with a slightly different message. Offers a tiebreaker if tie. 
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

function tieBreaker(){                                              //Tiebreaker function plays a single round and does not allow the possibility of a tie. 
    const playerChoice = playerPlays();
    console.log(`Player's choice: ${playerChoice}`);
    const computerChoice = computerPlays();
    console.log(`Computer's choice: ${computerChoice}`);
    let winner = compareRound(computerChoice, playerChoice);
    if (winner == `Tie`) {
        tieBreaker();                                               //If winner is tie, run the function again
    }
    else if (winner ==`Player`) {
        console.log(`Player wins!` );
    }
    else {
        console.log(`You lost..`);
    }
}



