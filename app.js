// //creating reference to the nodes

// const body = document.querySelector("body");
// const container = document.createElement("div");
// let square = document.createElement("div");
// const container = document.querySelector(".container");

// //assign class 'container' to container and add it to the body

// container.classList.add("container");
// body.appendChild(container);

// //assign class 'square' to div and add it to the container

// square.classList.add("square");
// container.appendChild(square);

// create grid
// function createGrid (gridNumber) {
//     for (let i = 1; i <= gridNumber; i++) {
//         const row = document.createElement('div');
//         container.appendChild(row);

//         for (let j = 1; j <= gridNumber; j++) {
//             const square = document.createElement('div');
//             square.setAttribute('id','innerSquare');
//             square.classList.add('square');
//             square.style.width = `${960/ gridNumber}px`;
//             square.style.height = `${500/ gridNumber}px`;
//            row.appendChild(square);
//        }
//     }
// }

// createGrid(3)

const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");

window.addEventListener("load", setDefaultGrid);
resetButton.addEventListener("click", changeSize);

function setDefaultGrid() {
  setGridSize(16);
  fillGrid(16);
}

function setGridSize(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add = "grid-element";
    gridElement.addEventListener("mouseover", changeColor);
    gridContainer.appendChild(gridElement);
  }
}

function changecolor(e) {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${randomR},${randomG}, ${randomB})`;
}

function changeSize() {
  let newSize = prompt("enter new size");

  if (newSize !== null) {
    newSize = parseInt(newSize);
    if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
      alert("enter a new number from 1-64 range");
      changeSize; //why is this here?
    } else {
      clearGrid();
      setGridSize(newSize);
      fillGrid(newSize);
    }
  }
}

function clearGrid() {
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
    gridContainer.removeChild(element);
  });
}

//oh so no need to define element
