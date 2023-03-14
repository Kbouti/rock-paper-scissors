//starting over:

console.log(`Welcome to Rock, Paper, Scissors Game`);


const choices = [`rock`,`paper`,`scissors`]

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
    console.log(playerChoice);
    //if tie, try again. If not, continue to compare
}

function computerPlays(){
    return choices[Math.floor(Math.random()*choices.length)]
    
}

function playerPlays(){
    let input = prompt(`Your turn! Type rock, paper, or scissors:`);
    console.log(`Player typed: ${input}`);
    input = input.toLowerCase();
    console.log(`Player's input to lower case is: ${input}`);
    if (choices.includes(input)) {
    }
    else{
        let input =prompt(`Check your spelling and try again.`)
        
    }
    return input;

}


playRound();
