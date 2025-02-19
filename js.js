const gridContainer = document.querySelector("#gridContainer");
createGrid();
addHoverEfecct();

function createGrid(size = 16) {
  gridContainer.innerHTML = "";
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < size; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
    }

    gridContainer.appendChild(row);
  }
}

let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  let gridSize;

  while (true) {
    let input = prompt("Enter grid size (max 100):");

    if (input === null) return; // اگر کاربر Cancel را زد، عملیات متوقف شود

    gridSize = parseInt(input); // تبدیل ورودی به عدد صحیح

    if (isNaN(gridSize)) {
      alert("Please enter a valid number!");
    } else if (gridSize < 1 || gridSize > 100) {
      alert("Please enter a number between 1 and 100.");
    } else {
      break; // مقدار معتبر است، حلقه متوقف شود
    }
  }

  createGrid(gridSize);
  addHoverEfecct();
})

function addHoverEfecct() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", function changeColor (e) {
      let randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      if (!e.target.style.backgroundColor){
        e.target.style.backgroundColor = randomColor;
      }
  });
})}

