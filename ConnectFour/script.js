function Cell() {
  let value = 0;

  const getValue = () => value
  

  const addToken = (player) => {
    value = player
  };
  return {
    value
  }

}

function GameBoard() {
  const row = 6;
  const column = 8;
  const board = [];

  const getBoard = () => board;

  for (let i = 0; i < row; i++){
    board[i] = [];

    for (let j = 0; j < column; j++){
      board[i].push(Cell());
      
    }
  }
  return {
    getBoard
  }


}

const game = GameBoard();

console.log(game.getBoard());

const game2 = Cell();
console.log(game2);


