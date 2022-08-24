const gameBoard = (() => {
  const boardDiv = document.querySelector(".game-board");
  let gameSquares = ["", "", "", "", "", "", "", "", ""];
  gameSquares.forEach((square) => {
    let boardSquare = document.createElement("div");
    boardSquare.setAttribute("class", "square");
    boardSquare.innerText = square;
    boardDiv.appendChild(boardSquare);
  });
})();

const player = (name, tile) => {
  const playerName = () => name;
  const playerTile = () => tile;
  return { playerName, playerTile };
};
const player1 = player("Matt", "X");
const player2 = player("Jeff", "O");
let turnCounter = 0;

const boardSquare = document.querySelectorAll(".square");
const resultDiv = document.querySelector(".game-result");

function clickEvent(event) {
  let squareValue = document.createElement("p");
  if (turnCounter % 2 === 0 && event.innerText === "") {
    squareValue.innerText = player1.playerTile();
    turnCounter++;
  } else if (turnCounter % 2 != 0 && event.innerText === "") {
    squareValue.innerText = player2.playerTile();
    turnCounter++;
  }
  event.appendChild(squareValue);
}

const checkWin = (event) => {
  let playerWin = document.createElement("h1");
  if (
    (boardSquare[0].innerText === "X" &&
      boardSquare[1].innerText === "X" &&
      boardSquare[2].innerText === "X") ||
    (boardSquare[0].innerText === "X" &&
      boardSquare[3].innerText === "X" &&
      boardSquare[6].innerText === "X") ||
    (boardSquare[3].innerText === "X" &&
      boardSquare[4].innerText === "X" &&
      boardSquare[5].innerText === "X") ||
    (boardSquare[1].innerText === "X" &&
      boardSquare[4].innerText === "X" &&
      boardSquare[7].innerText === "X") ||
    (boardSquare[6].innerText === "X" &&
      boardSquare[7].innerText === "X" &&
      boardSquare[8].innerText === "X") ||
    (boardSquare[2].innerText === "X" &&
      boardSquare[5].innerText === "X" &&
      boardSquare[8].innerText === "X") ||
    (boardSquare[0].innerText === "X" &&
      boardSquare[4].innerText === "X" &&
      boardSquare[8].innerText === "X") ||
    (boardSquare[2].innerText === "X" &&
      boardSquare[4].innerText === "X" &&
      boardSquare[6].innerText === "X")
  ) {
    playerWin.innerText = "Player 1 wins!";
    resultDiv.appendChild(playerWin);
  } else if (
    (boardSquare[0].innerText === "O" &&
      boardSquare[1].innerText === "O" &&
      boardSquare[2].innerText === "O") ||
    (boardSquare[0].innerText === "O" &&
      boardSquare[3].innerText === "O" &&
      boardSquare[6].innerText === "O") ||
    (boardSquare[3].innerText === "O" &&
      boardSquare[4].innerText === "O" &&
      boardSquare[5].innerText === "O") ||
    (boardSquare[1].innerText === "O" &&
      boardSquare[4].innerText === "O" &&
      boardSquare[7].innerText === "O") ||
    (boardSquare[6].innerText === "O" &&
      boardSquare[7].innerText === "O" &&
      boardSquare[8].innerText === "O") ||
    (boardSquare[2].innerText === "O" &&
      boardSquare[5].innerText === "O" &&
      boardSquare[8].innerText === "O") ||
    (boardSquare[0].innerText === "O" &&
      boardSquare[4].innerText === "O" &&
      boardSquare[8].innerText === "O") ||
    (boardSquare[2].innerText === "O" &&
      boardSquare[4].innerText === "O" &&
      boardSquare[6].innerText === "O")
  ) {
    playerWin.innerText = "Player 2 wins!";
    resultDiv.appendChild(playerWin);
  }
};
boardSquare.forEach((square) => {
  square.addEventListener("click", function () {
    clickEvent(square);
    checkWin();
  });
});
