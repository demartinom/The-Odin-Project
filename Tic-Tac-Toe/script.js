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

