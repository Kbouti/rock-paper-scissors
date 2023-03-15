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



function getTurn(){                 //I'm having trouble defining the choices and comparing them under the same scope. Every time I try to evaluate a winner I get a reference error. I'm trying to create a "turn" value that I can use to trigger the different outcomes. 
    let turn = playRound();
    console.log(turn);
   return turn;
}


function getResult(){
    let turn = getTurn();
    console.log(turn);
    if ((turn == (rock, paper)) || (turn == (paper, scissors)) || (turn == (scissors, rock))) {
        console.log(`you won!`)
    }
}

// ^I'm not sure why this doesn't work. It's erroring on line 64; the if statement. 



//getTurn();
getResult();


//make a function that checks if it's a tie-then replays the match if it is?