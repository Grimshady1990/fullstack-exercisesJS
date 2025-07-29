

// Factory function for the Game Board

  // 1. Create a 2d array that will represent the game board
    // - Use a nested loop technique to create the 2d array

  // 2. Create a method of getting the entire board

  // 3. Create a method for dropping a token
      // - The method needs to know which token and which column
      //   use function params (column, player)

      // - On the game board use .filter to create an Array of 
      //   all the empty rows in our chosen column then use .map
      //   so we can access those rows from the board.

      // - If no rows are available halt execution
      
      // - Now we have access to the cells we need, we can target the last
      //   available cell and add the players token.

  // 4. Create a method to print the board to the console
      // - Use .map to create a new board, then map each 
      //   cell to its value using getValue()

      // - Log to console


// Factory function for Cell value

//    1. Return the methods that need to be publicly accessed

//    2. Create a variable that stores the cells value

//    3. Create a function that that changes the value to 
//       the players token.
  
//    4. Create another function that calls the value variable through closure.

//    5. Return both functions so they can be accessed publicly

// Factory function for Game Controller

//    1. Create a factory function that accepts the players names
//       as parameters.

//    2. Create a variable that is equal to Gameboard function (This will
//       give the variable access to Gameboard's methods).

//    3. Create an array of objects that contain the players names and the
//       and the value of their tokens.

//    4. Create a variable called activePlayer that is equal to the player 
//       with a index of [0].

//    5. Create a condition that switches the players, if activePlayer is 
//       equal to index [0] then player index [1] is equal to index [0]

//    6. Create a function that returns activePlayer

//    7. Create a function that prints a updated board each round and
//       logs which players turn it is

/* ***********************************
      This is where we will check
      for a winner when we come to
      include that logic
  *********************************** */

//    8. Create a function that accepts the columns index as a 
//       a parameter.

//    9. Log the column where the token was dropped and who dropped it.

//    10. Call the dropToken function with the column and players token 
//        value as parameters

//    11. Call the switchPlayer function and the print new round function

//    12. Call the print new round function inside the gameController so
//        it executes when we call the GameController in the global scope

//    13. Return playRound and getActivePlayer functions so they can be accessed
//        publicly.