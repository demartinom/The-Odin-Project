let gridContainer = document.querySelector(".grid-container");

const createGrid = () => {
    for (let i = 0; i < 256; i++){
        let gridBox = document.createElement('div')
        gridBox.setAttribute('class', 'grid-box')
        gridContainer.appendChild(gridBox)
    }
};

createGrid()