let controlPanel = document.querySelector(".control-panel");
let chessBoard = document.querySelector(".chess-board");

let pawnButton = document.getElementById("pawn-button");

pawnButton.addEventListener("click", function() {
  chessBoard.classList.toggle("pawn-selected");
});
