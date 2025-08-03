function Cell() {
    let value = 0;

    const getValue = () => value;

    const addToken = (player) => {
        value = player;
    };
    return {
        getValue,
        addToken,
    };
}

function Gameboard() {
    const rows = 6;
    const columns = 7;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];

        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    };

    const getBoard = () => board;

    const printBoard = () => {
        const boardWithValues = board
        .map((row) => row.map((cell) => cell.getValue()));
        
        console.log(boardWithValues);
    };

    const dropToken = (column, player) => {
        const availableCells = board
        .filter((row) => row[column].getValue() === 0)
        .map((row) => row[column]);

        if (!availableCells.length) return;

        const lowestRow = availableCells.length -1;
        board[lowestRow][column].addToken(player);
    }
    
    return {
        printBoard,
        getBoard,
        dropToken,
    };


}

function GameController(
    playerOne = "Fizzy",
    playerTwo = "DooDaa"
) {

    const board = Gameboard();

    const player = [{
        name: playerOne,
        token: 1,
    },
    {
        name: playerTwo,
        token: 2,
    },

];

    let activePlayer = player[0];

    const switchPlayer = () => {
        activePlayer = activePlayer === player[0] ?
        player[1] : player[0];
    }

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn...`);
    }

    const playRound = (column) => {
        console.log(`${getActivePlayer().name} dropped a bomb into column ${column}`);
        board.dropToken(column, getActivePlayer().token)
        switchPlayer();
        printNewRound();
    }

    printNewRound();

    return {
        playRound,
        getActivePlayer,
        getBoard: board.getBoard

    };


}

function ScreenController() {
    const game = GameController();
    const playerTurnDiv = document.querySelector('.turn');
    const boardDiv = document.querySelector('.board');

    const updateScreen = () => {
        // clear the board
        boardDiv.textContent = "";

        // get the newest version of the board and 
        // player turn
        const board = game.getBoard();
        const activePlayer = game.getActivePlayer();

        // Display player's turn
        playerTurnDiv.textContent = `${activePlayer.name}'s turn...`;

        // Render board squares
        board.forEach(row => {
            row.forEach((cell, index) => {
                // Anything clickable should be a button!!
                const cellButton = document.createElement("button");
                cellButton.classList.add("cell");
                // Create a data attribute to identify the column
                // This makes it easier to pass into our `playRound` function
                cellButton.dataset.column = index 
                cellButton.textContent = cell.getValue();
                boardDiv.appendChild(cellButton);
            })
        })
    }

    // Add event listener for the board
    function clickHandlerBoard(e) {
        const selectColumn =
        e.target.dataset.column;
        // Make sure I've clicked a column and not the gaps in between
        if (!selectColumn) return;

        game.playRound(selectColumn);
        updateScreen();
    }
    boardDiv.addEventListener("click", clickHandlerBoard);

    // Initial render
    updateScreen();

    // We don't need to return anything from this module because everything is
    // is encapsulated inside this screen controller.

}
ScreenController();

