function createBoard(size){
  const board = document.querySelector(".board");

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const numDivs = size*size;

  for(let i=0; i<numDivs; i++){
    const div = document.createElement("div");
    board.appendChild(div);
  }

}

createBoard(16)