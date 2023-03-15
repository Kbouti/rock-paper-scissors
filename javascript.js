//starting over:

console.log(`Welcome to Rock, Paper, Scissors Game`);


const choices = [`rock`,`paper`,`scissors`]

let computerScore = 0;
let playerScore = 0;

function game(){
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

    if (computerChoice == playerChoice){
        console.log(`it's a tie!`);
    }
   else {
    console.log(`it isn't a tie`);
   }
   let result = (`${computerChoice}, ${playerChoice}`);
   console.log(`The result returned by function playRound is: ` + result);
   return result;
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



function compareChoice(){
    let turn = playRound();
    console.log(turn);
    if ((turn == rock,rock) || (turn == scissors,scissors) || (turn == paper,paper)){
        return `tie`
    }
}




compareChoice();



//make a function that checks if it's a tie-then replays the match if it is?