function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice
  }
  
  function playRound() {
    let playerSelection = prompt('what do you choose?').toLowerCase()
    let computerSelection = getComputerChoice()
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "scissors" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "scissors")
    ) {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === computerSelection) {
      return "You tied!";
    }
  }
  
  console.log(playRound());
  