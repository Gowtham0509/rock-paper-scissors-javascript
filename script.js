

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
}

function getHumanChoice(){
    let userChoice = parseInt(prompt("Rock [0], Papers[1] or Scissors[2]??"));
    console.log(userChoice);
}
// getComputerChoice();
getHumanChoice();