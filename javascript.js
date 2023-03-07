console.log(`Welcome to rock paper scissors. `);

let rock = 'Rock';
let paper = 'Paper';
let scissors = 'Scissors';
let computerChoice;
let playerChoice;



function computerPlays() {
    let i = Math.round((Math.random() * 100));
    if (i >= 66 ) {       
        let computerChoice = rock;
     console.log(rock);
    } else if (i >= 33) {
        let computerChoice = paper;
        console.log(paper);
    } else {
        let computerchoice = scissors;
        console.log(scissors);
    }
}


computerPlays();



