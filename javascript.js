console.log(`Welcome to Rock, Paper, Scissors. Enter "playRound()" below to get started.`);


const choices = [`rock`,`paper`,`scissors`];                    //designates the choices to be used by the computer
let computerScore = 0;                                          //start intial score at zero
let playerScore = 0;



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


function playRound(){                                              //Tiebreaker function plays a single round and does not allow the possibility of a tie. 
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





const rockButton =document.getElementById(`rock`)
const paperButton =document.getElementById(`paper`)
const scissorsButton =document.getElementById(`scissors`)



rockButton.addEventListener('click', function() {
    let playerChoice = 'rock'
    computerChoice = computerPlays()
    let result = compareRound(computerChoice, playerChoice);
    console.log(`The winner is: ${result}`)
  });

paperButton.addEventListener('click', function() {
    let playerChoice = 'paper'
    computerChoice = computerPlays()
    let result = compareRound(computerChoice, playerChoice);
    console.log(`The winner is: ${result}`)

  });

  scissorsButton.addEventListener('click', function() {
    let playerChoice = 'scissors'
    computerChoice = computerPlays()
    let result = compareRound(computerChoice, playerChoice);
    console.log(`The winner is: ${result}`)

    });