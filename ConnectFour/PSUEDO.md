### **Factory Function: `Cell`**

1. Create a variable `value` initialized to `0` (0 = empty cell).
2. Create a function `addToken(player)` that sets `value` to the player’s token (e.g., `1` or `2`).
3. Create a function `getValue()` that returns `value`.
4. Return an object exposing `{ addToken, getValue }`.

---

### **Factory Function: `GameBoard`**

1. Create a 2D array `board` using nested loops:

   * 6 rows × 7 columns (standard Connect Four size).
   * Each cell is created with the `Cell()` factory function.

2. Create a function `getBoard()` that returns the `board`.

3. Create a function `dropToken(column, player)`:

   1. Filter all rows where the cell at `[row][column]` is empty (`getValue() === 0`).
   2. Map the result to get **the actual cell objects** from that column.
   3. If no empty cells, **return** (column is full).
   4. Find the **lowest available row** (last element in the filtered array).
   5. Call `.addToken(player)` on that cell to drop the token.

4. Create a function `printBoard()`:

   1. Map over each row in `board`.
   2. Inside, map each cell → return `cell.getValue()`.
   3. Print the resulting 2D array to the console.

5. Return an object exposing `{ getBoard, dropToken, printBoard }`.

---

### **Factory Function: `GameController`**

1. Accept `playerOneName` and `playerTwoName` as parameters.

2. Create `gameBoard = GameBoard()` to manage the board.

3. Create an array `players` with two objects:

   ```
   [{ name: playerOneName, token: 1 },
    { name: playerTwoName, token: 2 }]
   ```

4. Set `activePlayer = players[0]`.

5. Create a function `switchPlayer()`:

   * If `activePlayer` is `players[0]`, set to `players[1]`.
   * Else, set to `players[0]`.

6. Create a function `getActivePlayer()` that returns `activePlayer`.

7. Create a function `playRound(column)`:

   1. Log which player is dropping a token and which column.
   2. Call `gameBoard.dropToken(column, activePlayer.token)`.
   3. Call `switchPlayer()`.
   4. Call `gameBoard.printBoard()` to show the updated board.

8. When `GameController` is created:

   * Call `gameBoard.printBoard()` immediately to show an empty board.

9. Return `{ playRound, getActivePlayer }`.

---

### **Notes for Future Improvement**

* Add a function `checkWinner()` inside `GameController` once the core game works.
* Consider handling invalid moves (like full columns) with a message.
* Eventually, add loops or user prompts for continuous gameplay.

---

### **Why This is A-Level**

* **Consistent structure** → Every function is broken into clear steps.
* **Precise method explanations** → Uses exact `.map` and `.filter` behavior.
* **Readable for any developer** → Someone could implement this directly in JS.



