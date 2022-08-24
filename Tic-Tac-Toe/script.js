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
const boardSquare = document.querySelectorAll(".square");

function clickEvent(event) {
  let squareValue = document.createElement("p");
  squareValue.innerText = player1.playerTile();
  event.appendChild(squareValue);
}
boardSquare.forEach((square) => {
  square.addEventListener("click", function () {
    clickEvent(square);
  });
});
