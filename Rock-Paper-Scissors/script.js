let playerScore = 0;
let computerScore = 0;
let playerMeter = document.querySelector(".player-score");
let computerMeter = document.querySelector(".computer-score");
let resultsText = document.querySelector(".results-text");
let finalResult = document.querySelector(".final-result");

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let playerSelection = button.innerText.toLowerCase();
    playRound(playerSelection);
    endResult();
  });
});

function endResult() {
  if (playerScore === 5) {
    finalResult.innerText = "The player wins!";
  } else if (computerScore === 5) {
    finalResult.innerText = "The computer wins!";
  }
}

function playRound(playerChoice) {
  let computerSelection = getComputerChoice();
  let playerWin = () => {
    resultsText.innerText = `You win! ${playerChoice} beats ${computerSelection}`;
    playerScore++;
    playerMeter.innerText = `Player: ${playerScore}`;
  };
  let computerWin = () => {
    resultsText.innerText = `You lose! ${computerSelection} beats ${playerChoice}`;
    computerScore++;
    computerMeter.innerText = `Computer: ${computerScore}`;
  };
  let gameTie = () => {
    resultsText.innerText = "You tied!";
  };
  if (
    (playerChoice === "rock" && computerSelection === "scissors") ||
    (playerChoice === "scissors" && computerSelection === "paper") ||
    (playerChoice === "paper" && computerSelection === "rock")
  ) {
    return playerWin();
  } else if (
    (playerChoice === "rock" && computerSelection === "paper") ||
    (playerChoice === "scissors" && computerSelection === "rock") ||
    (playerChoice === "paper" && computerSelection === "scissors")
  ) {
    return computerWin();
  } else if (playerChoice === computerSelection) {
    return gameTie();
  }
}
