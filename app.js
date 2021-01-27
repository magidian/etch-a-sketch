//creating reference to the nodes
const body = document.querySelector("body");
const container = document.createElement("div");
let square = document.createElement("div");



//assign class 'container' to container and add it to the body
container.classList.add("container");
body.appendChild(container);

//assign class 'square' to div and add it to the container
square.classList.add("square");
container.appendChild(square);

// create grid
function createGrid (gridNumber) {
    let gridArea = gridNumber **2;
    for (let i = 1; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridItem);
    }
}