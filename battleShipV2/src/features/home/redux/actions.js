// module for battleship game board creation
export { boardDraw } from './boardDraw';

var rows = 10; // rows and columns for the standard 10x10 board
var cols = 10;
var boardCellSize = 50; // size of the cells for the board in px
var board = document.getElementById('board'); // the board as it appears on the page

// drawing the board into the page 
for (let i = 0; i < cols; i++) {
  for (let j = 0; j < rows; j++) {
    // create a new div for each grid square
    var cell = document.createElement('div');
    if (board !== null) {
      board.appendChild(cell);
    } else console.log('An error hath!: Null board element');

    // label each cell with a unique id
    cell.id = 'cell' + i + j;

    // position the grid on the page
    var cellTop = j * boardCellSize;
    var cellLeft = i * boardCellSize;
    cell.style.top = cellTop + 'px';
    cell.style.left = cellLeft + 'px';
  }
}