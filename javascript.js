const playerScore = 0
const computerScore = 0

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
        let  message = `It's a tie!`
        let result = `tie`;
        return result;
    }
    else if (playerChoice == `r` && computerChoice == `p`){
        let  message = `Paper beats rock. Computer wins`
        computerScore += 1;
        let result = `computer`;
        return result;
    }


    else if (playerChoice == `r` && computerChoice == `s`){
        let  message = `Rock beats scissors, you win!`
        playerScore += 1;
        let result = `player`;
        return result;
    }

    else if (playerChoice == `p` && computerChoice == `s`){
        let  message = `Scissors cuts paper. Computer wins`
        computerScore += 1;
        let result = `computer`;
        return result;
    }

    else if (playerChoice == `s` && computerChoice == `p`){
        let  message = `Scissors beats paper, you win!`
        playerScore += 1;
        let result = `player`;
        return result;
    }

    else if (playerChoice == `p` && computerChoice == `r`){
        let  message = `rock beats paper, somputer wins`
       computerScore += 1;
        let result = `computer`;
        return result;
    }

    else if (playerChoice == `s` && computerChoice == `r`){
        let  message = `Rock beats scissors, computer wins!`
        computerScore += 1;
        let result = `computer`;
        return result;
    }










}


rockButton_button.addEventListener(`click`, function(){
    
})

paperButton_button.addEventListener(`click`, function(){
      
})

scissorsButton_button.addEventListener(`click`, function(){
    
})