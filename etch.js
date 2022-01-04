let gridSize = 0;
while (gridSize>100 || gridSize<2) {
    gridSize = Number(prompt("Enter grid size between 2 and 100:"));
    if (gridSize < 101 && gridSize > 1) {
        break;
    }
    else {
        alert("You entered size that is out of range, please retry!");
    }
}

const size = gridSize;

const grid = document.querySelector(".grid");

for (let h=0; h<size; h++) {
    let row = document.createElement('div');
    row.setAttribute("class", "row");
    grid.appendChild(row);
    for (let w=0; w<size; w++) {
        let column = document.createElement('div');
        column.setAttribute("class", "cell");
        row.appendChild(column);
    }
}
const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => cell.setAttribute('class', 'cell dark'))
})
