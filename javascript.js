



// Super helpful guide: https://www.youtube.com/watch?v=jaVNP3nIAv0&t=3419s





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
    return choices[Math.floor(Math.random()*choices.length)];
}

function win() {
    playerScore++;
    playerScore_div.innerHTML = playerScore;
    console.log(`win`);
}

function lose() {
    console.log(`lose`);

}

function draw() {
    console.log(`draw`);
}

function playRound(playerChoice){
    let computerChoice = computerplays();
    switch (playerChoice + computerChoice){
        case "rs":
        case "sp":
        case "pr":
            win();

            break;

        case "sr":
        case "ps":
        case "rp":
            lose();
            break;
     
        case "ss":
        case "rr":
        case "pp":
            draw();
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