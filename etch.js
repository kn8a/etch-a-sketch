const size = 16;

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
