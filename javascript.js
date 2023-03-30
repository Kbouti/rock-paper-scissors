let playerScore = 0
let computerScore = 0

const rockButton_button =document.getElementById(`rock`);
const paperButton_button =document.getElementById(`paper`);
const scissorsButton_button =document.getElementById(`scissors`);
const actionStatement_h3 =document.getElementById(`action-statement`);
const playerScore_div =document.getElementById(`playerScore`);
const computerScore_div =document.getElementById(`computerScore`);

const choices = [`r`, `p`, `s`]

function computerplays(){
    return choices[Math.floor(Math.random()*choices.length)] 
}

function playRound(playerChoice){
    let computerChoice = computerplays();
    if (playerChoice == computerChoice){
        let  message = `It's a tie! The score is ${playerScore} - ${computerScore}`;
        let result = `tie`;
        console.log(message);
        return result;
    }
    else if (playerChoice == `r` && computerChoice == `p`){
        computerScore += 1;
        let  message = `Paper beats rock. Computer wins. The score is ${playerScore} - ${computerScore}`;
        let result = `computer`;
        console.log(message);
        return result;
    }
    else if (playerChoice == `r` && computerChoice == `s`){
        playerScore += 1;
        let  message = `Rock beats scissors, you win! The score is ${playerScore} - ${computerScore}`;
        let result = `player`;
        console.log(message);
        return result;
    }
    else if (playerChoice == `p` && computerChoice == `s`){
        computerScore += 1;
        let  message = `Scissors cuts paper. Computer wins. The score is ${playerScore} - ${computerScore}`;
        let result = `computer`;
        console.log(message);
        return result;
    }
    else if (playerChoice == `s` && computerChoice == `p`){
        playerScore += 1;
        let  message = `Scissors beats paper, you win! The score is ${playerScore} - ${computerScore}`;
        let result = `player`;
        console.log(message);
        return result;
    }
    else if (playerChoice == `p` && computerChoice == `r`){
        computerScore += 1;
        let  message = `rock beats paper, somputer wins. The score is ${playerScore} - ${computerScore}`;
        let result = `computer`;
        console.log(message);
        return result;
    }
    else if (playerChoice == `s` && computerChoice == `r`){
        computerScore += 1;
        let  message = `Rock beats scissors, computer wins! The score is ${playerScore} - ${computerScore}`;
        let result = `computer`;
        console.log(message);
        return result;
    }
}


function win(){

}

function lose(){
    
}


function draw(){
    
}



rockButton_button.addEventListener(`click`, function(){
    if (playRound(`r`) =='tie'){

    }
})

paperButton_button.addEventListener(`click`, function(){
    playRound(`p`);
})

scissorsButton_button.addEventListener(`click`, function(){
    playRound(`s`);
})