const prompt = require('prompt');

class minesweeper {
  constructor(x, y) {
    this.board = new Array(y).fill(0).map(row => new Array(x).fill(1));
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        this.board[i][j] = Math.floor(3 * Math.random())
      }
    }
    this.playerBoard = new Array(y).fill(0).map(row => new Array(x).fill('□'));
    this.checked = new Set();
  }

  play(){
    console.log(this.board);
    prompt.get(['row', 'col'], (err, result)=> {
      console.log(`checking row: ${result.row} col: ${result.col}`);
      let row = Number(result.row);
      let col = Number(result.col);
      this.checkForMines(row, col);
      console.log(this.playerBoard)
    });
  }

  checkForMines(row, col) {
    const rowCount = this.board.length;
    const colCount = this.board[0].length
    if (col < colCount && row < rowCount) {
      if (this.board[row][col] > 0) {
        console.log('YOU HIT A MINE!!')
        console.log(this.playerBoard)
        return
      }
    } 
    function BFS(row, col, board, playerBoard, checked) {
      let queue = [[row, col]];
      while (queue.length) {
        let current = queue.shift();
        let currentRow = current[0];
        let currentCol = current[1];
        playerBoard[currentRow][currentCol] = board[currentRow][currentCol];
        checked.add(currentRow, currentCol);
        if (currentRow - 1 > 0) {
          
        }
      }
    }
    // function recurse(row, col, board, playerBoard, checked) {
    //   console.log(checked);
    //   if (row < 0 || row >= rowCount || col < 0 || col >= colCount || checked.has(row, col)) {
    //     return
    //   } else {
    //     playerBoard[row][col] = board[row][col];
    //     checked.add(row, col)
    //     recurse(row, col + 1, board, playerBoard, checked);
    //     recurse(row + 1, col, board, playerBoard, checked);
    //     recurse(row, col - 1, board, playerBoard, checked);
    //     recurse(row - 1, col, board, playerBoard, checked);
    //   }
    // }
    // recurse(row, col, this.board, this.playerBoard, this.checked);
  }
}

const game = new minesweeper(5,10);
game.play();