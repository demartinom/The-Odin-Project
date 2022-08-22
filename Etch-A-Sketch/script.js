const windowFunctions = () => {
  let gridContainer = document.querySelector(".grid-container");
  let gridButton = document.querySelector(".prompt");
  let defaultSize = 16;
  function changeGrid() {
    let sizeChoice = prompt(
      "How big a grid would you like? It cannot be large than 100x100"
    );
    createGrid(sizeChoice);
  }
  gridButton.addEventListener("click", changeGrid);

  const createGrid = (gridSize) => {
    gridContainer.innerHTML = "";
    for (let i = 0; i < gridSize * gridSize; i++) {
      let gridBox = document.createElement("div");
      gridBox.setAttribute("class", "grid-box");
      gridContainer.appendChild(gridBox);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 40px)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 40px)`;
  };

  createGrid(defaultSize);
};
window.onload = windowFunctions;
