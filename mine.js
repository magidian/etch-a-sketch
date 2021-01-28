//creating reference to the nodes
const body = document.querySelector("body");
const container = document.createElement("div");
let square = document.createElement("div");
const container = document.querySelector(".container");

//assign class 'container' to container and add it to the body
container.classList.add("container");
body.appendChild(container);

//assign class 'square' to div and add it to the container
square.classList.add("square");
container.appendChild(square);