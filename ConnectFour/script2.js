function GameBoard() {
    const rows = 6;
    const columns = 8;
    const board = [];

    const getBoard = () => board;

    for (let i = 0; i < rows; i++) {
        board[i] = [];

        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }

    const printBoard = () => {
        const boardWithValues = board.map((
            row) => row.map((cell) => cell.getValue()))
            console.log(boardWithValues);
    }

    const dropToken = (column, player) => {
        const availableCells = board
        .filter((row) => row[column].getValue() === 0)
        .map((row) => row[column]);

        if (!availableCells.length) return;

        const lowestRow = availableCells.length - 1;
        board[lowestRow][column].addToken(player);
        getBoard();
        printBoard();
    }

    return {
        printBoard,
        getBoard,
        dropToken
    }
}

function Cell() {
    let value = 0;

    const getValue = () => value;
    
    const addToken = (player) => {
        value = player;
    }
    return {
        getValue,
        addToken,
    }
}

function GameController(
    playerOne = "Fizzy",
    playerTwo = "DooDaa"
) {
    const players = [
        {
        name: playerOne,
        token: 1,
        },
        {
        name: playerTwo,
        token: 2,
        
        },
    ];

    const gameboard = GameBoard();

    let activePlayer = players[0];

    const switchPlayer = () => {
        activePlayer = activePlayer === players[0] ?
        players[1] : players[0];
        console.log(`it is now ${activePlayer.name}'s turn`);

    }

    const getActivePlayer = () => activePlayer;

    const playRound = (column) => {
        

    }
    
    return {
        switchPlayer,
    }
}

const game = GameBoard();
game.dropToken(3, 7);
const game2 = GameController();
game2.switchPlayer();

game2.switchPlayer();
game2.switchPlayer();
game2.switchPlayer();