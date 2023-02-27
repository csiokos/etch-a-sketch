const board = document.querySelector(".board");
const myButton = document.getElementById("myButton");
let color = 'black';

function createBoard(size){
  

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const numDivs = size*size;

  let isMouseDown = false;

  for(let i=0; i<numDivs; i++){
    const div = document.createElement("div");
    
    div.addEventListener("mousedown", () => {
      isMouseDown = true;
      colorDiv(div)
    });
  
    div.addEventListener("mouseover", () => {
      if (isMouseDown) {
        colorDiv(div)
      }
    });
  
    document.addEventListener("mouseup", () => {
      isMouseDown = false;
    });
    board.appendChild(div);

  }

};


createBoard(16);

myButton.addEventListener('click',()=>{
  const boardSize = document.getElementById("grid-size-input").value;

  if (boardSize >= 2 && boardSize <= 99) {
    board.innerHTML = "";
    createBoard(boardSize);
  } else {
    alert("Please enter a number between 2 and 99.");
  }
});

function colorDiv(div){
  if(color === 'random'){
    div.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
  
  } else {
    div.style.backgroundColor = 'black'
  }

}

function setColor(colorChoice, reset=false){
  color = colorChoice;

  if (reset) {
    const divs = document.querySelectorAll('.board div');
    divs.forEach(div => {
      div.style.backgroundColor = 'white';
    });
  }

}
