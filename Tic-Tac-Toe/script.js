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

function clickEvent(event) {
  let squareValue = document.createElement("p");
  if (turnCounter % 2 === 0 && event.innerText === "") {
    squareValue.innerText = player1.playerTile();
  } else if (turnCounter % 2 != 0 && event.innerText === "") {
    squareValue.innerText = player2.playerTile();
  }
  turnCounter++;
  event.appendChild(squareValue);
}
boardSquare.forEach((square) => {
  square.addEventListener("click", function () {
    clickEvent(square);
  });
});
