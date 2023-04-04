



// Super helpful guide: https://www.youtube.com/watch?v=jaVNP3nIAv0&t=3419s





let playerScore = 0
let computerScore = 0

const rockButton_button =document.getElementById(`rock`);
const paperButton_button =document.getElementById(`paper`);
const scissorsButton_button =document.getElementById(`scissors`);
const actionStatement_h3 =document.getElementById(`actionStatement`);
const playerScore_div =document.getElementById(`playerScore`);
const computerScore_div =document.getElementById(`computerScore`);

const choices = [`r`, `p`, `s`]

function choiceToWord(choice){
    if (choice === `r`){
        return `Rock`;
    }
    else if (choice === `p`){
        return `Paper`;
    }
    else if (choice === `s`){
        return `Scissors`;
    }
}

function winMessage(playerChoice, computerChoice){
    let message = `${choiceToWord(playerChoice)} beats ${choiceToWord(computerChoice)}. You win! `;
    actionStatement_h3.innerHTML = message;
}


function computerplays(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function win() {
    playerScore++;
    playerScore_div.innerHTML = playerScore;
    console.log(`win`);
}

function lose() {
    computerScore++;
    computerScore_div.innerHTML = computerScore;
    console.log(`lose`);

}

function draw() {
    console.log(`draw`);
}

function playRound(playerChoice){
    let computerChoice = computerplays();
    switch (playerChoice + computerChoice){
        case "rs":
            let winMessage1 = `Rock beats scissors, you win!`
            playerScore++
            playerScore_div.innerHTML = playerScore;
            actionStatement_h3.innerHTML = winMessage1;
            break;

        case "sp":
            let winMessage2 = `Scissors beats paper, you win!`
            playerScore++
            playerScore_div.innerHTML = playerScore;
            actionStatement_h3.innerHTML = winMessage2;
            break;
            
        case "pr":
            let winMessage3 = `Paper beats rock, you win!`
            playerScore++
            playerScore_div.innerHTML = playerScore;
            actionStatement_h3.innerHTML = winMessage3;
            break;

            break;

        case "sr":
            let loseMessage1 = `Scissors lost to rock, you lose...`
            computerScore++
            computerScore_div.innerHTML = computerScore;
            actionStatement_h3.innerHTML = loseMessage1;
            break;

        case "ps":
            let loseMessage2 = `Paper lost to scissors, you lose...`
            computerScore++
            computerScore_div.innerHTML = computerScore;
            actionStatement_h3.innerHTML = loseMessage2;
            break;
        case "rp":
            let loseMessage3 = `Rock lost to paper, you lose...`
            computerScore++
            computerScore_div.innerHTML = computerScore;
            actionStatement_h3.innerHTML = loseMessage3;
            break;
     
        case "ss":
            let tieMessage1 = `You both picked scissors, it's a tie. Try again.`;
            actionStatement_h3.innerHTML = tieMessage1;
            break;

        case "rr":
            let tieMessage2 = `You both picked rock, it's a tie. Try again.`;
            actionStatement_h3.innerHTML = tieMessage2;
            break;
        case "pp":
            let tieMessage3 = `You both picked paper, it's a tie. Try again.`;
            actionStatement_h3.innerHTML = tieMessage3;
            break;
    }
}






rockButton_button.addEventListener(`click`, function(){
   playRound(`r`)
})

paperButton_button.addEventListener(`click`, function(){
    playRound(`p`);
})

scissorsButton_button.addEventListener(`click`, function(){
    playRound(`s`);
})