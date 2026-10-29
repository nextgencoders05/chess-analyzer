const board = document.getElementById("chessboard");

const pieces = {
  a8: "♜", b8: "♞", c8: "♝", d8: "♛", e8: "♚", f8: "♝", g8: "♞", h8: "♜",
  a7: "♟", b7: "♟", c7: "♟", d7: "♟", e7: "♟", f7: "♟", g7: "♟", h7: "♟",
  a2: "♙", b2: "♙", c2: "♙", d2: "♙", e2: "♙", f2: "♙", g2: "♙", h2: "♙",
  a1: "♖", b1: "♘", c1: "♗", d1: "♕", e1: "♔", f1: "♗", g1: "♘", h1: "♖"
};

const files = ["a","b","c","d","e","f","g","h"];
let flipped = false;
let selectedSquare = null;
let themeIndex = 0;

const themes = [
  ["#f0ead5", "#5d934f"],
  ["#f1f1f1", "#333333"],
  ["#d9b07a", "#704214"]
];

function renderBoard() {
  board.innerHTML = "";

  const ranks = flipped ? [1,2,3,4,5,6,7,8] : [8,7,6,5,4,3,2,1];
  const boardFiles = flipped ? [...files].reverse() : files;

  ranks.forEach((rank, row) => {
    boardFiles.forEach((file, col) => {
      const squareName = file + rank;
      const square = document.createElement("div");

      square.className = "square " + ((row + col) % 2 === 0 ? "light" : "dark");
      square.dataset.square = squareName;

      if (selectedSquare === squareName) {
        square.classList.add("selected");
      }

      if (pieces[squareName]) {
        const piece = document.createElement("span");
        piece.className = "piece " + (rank >= 7 || rank === 8 ? "black" : "white");
        piece.textContent = pieces[squareName];
        square.appendChild(piece);
      }

      square.addEventListener("click", () => selectSquare(squareName));
      board.appendChild(square);
    });
  }

  applyTheme();
}

function selectSquare(square) {
  selectedSquare = selectedSquare === square ? null : square;
  renderBoard();
}

function flipBoard() {
  flipped = !flipped;
  renderBoard();
}

function resetBoard() {
  selectedSquare = null;
  flipped = false;
  renderBoard();
}

function undoMove() {
  alert("Undo will be connected when legal move logic is added.");
}

function redoMove() {
  alert("Redo will be connected when move history is added.");
}

function cycleTheme() {
  themeIndex = (themeIndex + 1) % themes.length;
  applyTheme();
}

function applyTheme() {
  const root = document.documentElement;
  root.style.setProperty("--light-square", themes[themeIndex][0]);
  root.style.setProperty("--dark-square", themes[themeIndex][1]);
}

renderBoard();
