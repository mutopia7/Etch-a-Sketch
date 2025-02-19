// const container = document.querySelector("#container");

// for (let i = 1; i < 17; i++) {
//     let divHorizontal = document.createElement("div");
//     divHorizontal.setAttribute("id", `divH${i}`);
//     divHorizontal.setAttribute("class", "horizontal");
//     for (let j = 1; j < 17; j++) {
//         let divCoulmn = document.createElement("div");
//         divCoulmn.setAttribute("id", `divC${i}Row${j}`);
//         divCoulmn.setAttribute("class", `column${i} column`);
//         divHorizontal.appendChild(divCoulmn);
//     }

//     container.appendChild(divHorizontal);
// }

const gridContainer = document.querySelector("#gridContainer");
const gridSize = 16; // تعداد سطرها و ستون‌ها

for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < gridSize; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
    }

    gridContainer.appendChild(row);
}

