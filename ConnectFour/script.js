// ============================
// Factory + Module Pattern Demo
// ============================
//
// This code demonstrates the combination of the **Factory Pattern** 
// and the **Module Pattern** in JavaScript:
//
// 1. **Factory Pattern**: Each function (Cell, GameBoard) returns
//    a new object with its own state and behavior.
// 2. **Module Pattern**: Internal variables are private and only
//    accessible via public methods (using closures).
//
// Benefits: Encapsulation, cleaner code, and reusable objects.

// ============================
// Factory function for Cell
// ============================
function Cell() {
  // --- Module Pattern (private state) ---
  // `value` is private and cannot be accessed directly outside.
  let value = 0;

  // --- Public methods (part of the module's API) ---
  // Returns the current cell value
  const getValue = () => value;

  // Changes the cell's value to represent the player's token
  const addToken = (player) => {
    value = player;
  };

  // --- Factory Pattern ---
  // Returning an object with methods creates a new Cell instance each time.
  return {
    getValue,
    addToken,
  };
}

// ============================
// Factory function for GameBoard
// ============================
function GameBoard() {
  // --- Module Pattern (private state) ---
  const rows = 6;
  const columns = 8;
  const board = [];

  // Create a 2D array of Cell objects
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      // Each board[i][j] is a Cell module with private `value`
      board[i].push(Cell());
    }
  }

  // --- Public methods (part of the module's API) ---
  // Returns the full board (useful if needed externally)
  const getBoard = () => board;

  // Prints a 2D array of cell values for easy visualization
  const printBoard = () => {
    // `map` creates a new array by transforming each element
    const boardWithValues = board.map((row) =>
      row.map((cell) => 
        // Access the private value of each Cell via its closure
        cell.getValue()
      )
    );

    console.log(boardWithValues);
  };

  // Public method: drop a player's token into a chosen column
const dropToken = (column, player) => {
  // Step 1: Find all empty cells in the chosen column
  // - filter: keep only rows where the cell in this column is empty
  // - map: return the cell objects themselves for easier access
  const availableCells = board
    .filter((row) => row[column].getValue() === 0)
    .map((row) => row[column]);
  
  // Step 2: If no empty cells, the column is full → do nothing
  if (!availableCells.length) return;

  // Step 3: Take the lowest empty cell (last in the filtered list)
  const lowestCellIndex = availableCells.length - 1;

  // Step 4: Place the player's token in that cell
  board[lowestCellIndex][column].addToken(player);
};


  // --- Factory Pattern ---
  // Each call to GameBoard() returns a new independent game board instance.
  return {
    getBoard,
    printBoard,
    dropToken,
  };
}

// ============================================================
// GameController Factory Function
// ============================================================
//
// - Factory Pattern: Creates a new game controller instance with its own state.
// - Module Pattern: Player data and turn logic are private, exposed only through a public API.
// - Purpose: Manages game flow, player turns, and interactions with the GameBoard.
//
function GameController(
  playerOne = "Player One",
  playerTwo = "Player Two"
) {
  // ------------------------------------------------------------
  // 1. Initialize Players (Private State)
  // ------------------------------------------------------------
  //
  // - Accepts optional names to customize players per game.
  // - Each player object stores:
  //    - `name`  → for display/logging
  //    - `token` → numeric ID for board placement
  //
  const players = [
    { name: playerOne, token: 1 },
    { name: playerTwo, token: 2 },
  ];

  // Track whose turn it is (default: Player One)
  // - Private variable, accessible only through module methods
  let activePlayer = players[0];

  // ------------------------------------------------------------
  // 2. Initialize GameBoard
  // ------------------------------------------------------------
  //
  // - Create a new board using the GameBoard factory function
  // - This `board` instance is unique to this GameController
  //
  const board = GameBoard();

  // ------------------------------------------------------------
  // 3. Internal Utility Methods (Private)
  // ------------------------------------------------------------

  // Toggle active player between Player One and Player Two
  // - Uses a ternary operator (short form of if/else)
  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0]
      ? players[1]
      : players[0];
  };

  // Print the board state and indicate whose turn it is
  // - Called at the start of the game and after each round
  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`);
  };

  // ------------------------------------------------------------
  // 4. Public Methods (Module API)
  // ------------------------------------------------------------

  // Provide controlled access to the current active player
  const getActivePlayer = () => activePlayer;

  // Main game loop function:
  // 1. Log the move
  // 2. Drop the active player's token in the chosen column
  // 3. Switch to the other player
  // 4. Print the updated board and next turn
  const playRound = (column) => {
    console.log(
      `Dropping ${getActivePlayer().name}'s token into column ${column}...`
    );

    board.dropToken(column, getActivePlayer().token);

    switchPlayerTurn();
    printNewRound();
  };

  // ------------------------------------------------------------
  // 5. Game Initialization
  // ------------------------------------------------------------
  //
  // - Immediately print the initial board and prompt the first move
  //
  printNewRound();

  // ------------------------------------------------------------
  // 6. Return Public API (Module Pattern)
  // ------------------------------------------------------------
  //
  // - Only expose methods needed outside
  // - Keeps internal logic (like switchPlayerTurn) private
  //
  return {
    playRound,
    getActivePlayer,
  };
}

// ============================================================
// Usage Example
// ============================================================
const controller = GameController("Alice", "Bob");
controller.playRound(3);
controller.playRound(4);



