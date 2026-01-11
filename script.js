
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
