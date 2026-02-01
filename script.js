
const computerChoices = ["rock", "paper", "scissors"]; 


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    return computerChoices[computerChoice];
}

function getHumanChoice(){
    let userChoice = prompt("Rock, Paper or Scissors??").toLowerCase();
    console.log(userChoice);
    return userChoice;
}

function playRound(humanChoice, computerChoice, humanScore, computerScore){
    if(humanChoice === computerChoice){
        console.log(`Draw! Both chose ${computerChoice}`);
    }
    else if(humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "rock"){
        console.log(`You Won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else{
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    return [humanScore, computerScore];
}

let humanScore = 0;
let computerScore = 0;
/*
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 1; i <= 5; i++){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
       [humanScore, computerScore] = playRound(humanSelection, computerSelection, humanScore, computerScore);
    }

    if(humanScore > computerScore){
        console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}\nHuman Wins!`);
    }
    else if(computerScore > humanScore){
        console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}\nComputer Wins!`);
    }
    else{
        console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}\nDraw!!`);
    }
    
}
playGame();
*/

function resetGame(){
    humanScore = 0;
    computerScore = 0;
}

const resetButton = document.querySelector(".resetBtn");
resetButton.addEventListener("click", () => {

});

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const computerChoice = getComputerChoice();
        [humanScore, computerScore] = playRound(button.textContent.toLowerCase(), computerChoice, humanScore, computerScore);
        const humanScoreDisplay = document.querySelector(".humanScoreDisplay");
        const computerScoreDisplay = document.querySelector(".computerScoreDisplay");
        humanScoreDisplay.textContent = `Your Score: ${humanScore}.`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
        console.log([humanScore, computerScore]);

    });
});


