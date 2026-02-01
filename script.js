
const computerChoices = ["rock", "paper", "scissors"]; 
let humanScore = 0;
let computerScore = 0;
let gameOver = false;
const humanScoreDisplay = document.querySelector(".humanScoreDisplay");
const computerScoreDisplay = document.querySelector(".computerScoreDisplay");
const displayHumanChoice = document.querySelector(".humanChoice");
const displayComputerChoice = document.querySelector(".computerChoice");
const results = document.querySelector(".winner");
const buttons = document.querySelectorAll(".btn");
const resetButton = document.querySelector(".resetBtn");


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    return computerChoices[computerChoice];
}


function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        results.textContent = `Draw! Both chose ${computerChoice}`;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "rock"){
        results.textContent = `You Won! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
    else{
        results.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
}

function updateUI(computerChoice, humanChoice){
    displayHumanChoice.textContent = `Your Choice: ${humanChoice}`;
    displayComputerChoice.textContent = `Computer's Choice: ${computerChoice}`;
    humanScoreDisplay.textContent = `Your Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}
function resetGame(){
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    results.textContent = "";
    updateUI("");
}
function checkWinner(){
    if(humanScore === 5 || computerScore === 5){
        gameOver = true;    
        if(humanScore > computerScore){
            results.textContent = "You Win!";
        }
        else if(humanScore < computerScore){
            results.textContent = "Computer Wins!";
        }
        else{
            results.textContent = "Game Draw!";
        }
    }
}

resetButton.addEventListener("click", () => {
    resetGame();
});

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

        if(gameOver) return;
        const humanChoice = button.textContent.toLowerCase();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log([humanScore, computerScore]);
        updateUI(computerChoice, humanChoice);
        checkWinner();
    });
});


