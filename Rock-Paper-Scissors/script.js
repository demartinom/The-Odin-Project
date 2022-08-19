function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}
let playerScore = 0;
let computerScore = 0;

function playRound() {
  let playerSelection = prompt("what do you choose?").toLowerCase();
  let computerSelection = getComputerChoice();
  let playerWin = `You win! ${playerSelection} beats ${computerSelection}`;
  let computerWin = `You lose! ${computerSelection} beats ${playerSelection}`;
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    return playerWin;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    computerScore++;
    return computerWin;
  } else if (playerSelection === computerSelection) {
    return "You tied!";
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
  if (playerScore > computerScore) {
    console.log("The player wins!");
  } else if (playerScore < computerScore) {
    console.log("The computer wins!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
