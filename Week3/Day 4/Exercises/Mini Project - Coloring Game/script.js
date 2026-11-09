const palette = document.getElementById("palette");
const board = document.getElementById("board");

const colors = [
    "red", "orangered", "orange", "yellow", "yellowgreen", "lightgreen", "green", "turquoise", "cyan", "lightskyblue", "dodgerblue", "blue", "darkblue", "indigo", "darkmagneta", "violet", "lightpink", "lightgray", "gray", "black", "white"
];

for (const colorName of colors) {
    const swatch = document.createElement("div");
    swatch.style.backgroundColor = colorName;
    palette.appendChild(swatch);
}

const columns = Math.floor((board.clientWidth - 5) / 30);
const rows = Math.floor((board.clientHeight - 10) / 30);
const total = columns * rows;
for (let i = 0; i < total; i++) {
    const cell = document.createElement("div");
    board.appendChild(cell);
}

let currentColor = null;
let isDrawing = false;

for (const swatch of palette.children) {
    swatch.addEventListener("click", function() {
        currentColor =swatch.style.backgroundColor;
    });
}

document.body.addEventListener("mousedown", function() {
    isDrawing = true;
});

document.body.addEventListener("mouseup", function() {
    isDrawing = false;
});

for (const cell of board.children) {
    cell.addEventListener("mousedown", function() {
        if (currentColor !== null) {
            cell.style.backgroundColor = currentColor;
        }
    });
    cell.addEventListener("mouseover", function() {
        if (isDrawing && currentColor !== null) {
            cell.style.backgroundColor = currentColor;
        }
    });
}

document.getElementById("clear").addEventListener("click", function() {
    for (const cell of board.children) {
        cell.style.backgroundColor = "white"
    }
});