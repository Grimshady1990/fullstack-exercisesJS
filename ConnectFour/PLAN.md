# Introduction

I want to start by saying this isn't just a project—it's an important lesson.

My attempt to build a tic-tac-toe game became impossible because I struggle to think in design patterns.

I was given an article called *“Building a House From the Inside Out.”* It talks about focusing less on the final product and more on the structures and systems that make the “house” (or project) work.

While the metaphor didn’t give me direct answers, it pointed me toward something valuable: **breaking things down from the inside out**.

# My Problem

So what’s my problem?

That could be a long conversation depending on the context, but in this case, it's simple:
**I can’t read code well.**

Sure, I can read my own little LEGO Duplo creations, but when it comes to other people’s mammoth Meccano structures, I’m completely lost.

Reaching this point in The Odin Project has humbled me a bit—but I’m not one to cower away from a challenge. I have enough self-awareness to take a step back and study when I reach an echelon I’m not yet prepared for.

So how can this “building a house” article help me?

Well, the article itself isn’t particularly helpful—but the author included a **Connect Four** project they wrote. That’s where things get interesting.

Studying this project will help me tackle a huge problem: understanding complex code (or at least code that feels complex *to me*). This will help in two major ways:

1. I’ll get better at reading and understanding other people’s code.
2. I’ll improve my ability to write and plan more complex code of my own.

# The Plan

Great! So how am I going to use this as an opportunity?

Simple: I’ll dedicate as much time as needed to studying this code. I’ll live and breathe this gentleman’s console version of Connect Four.

I’ll write my **own** version of his game, building it piece by piece, leaving myself comments to prove I understand each part.

Once I’ve come to my conclusions, I’ll use ChatGPT as a mentor to help review my work—not to spoon-feed me answers, but to verify that I’m truly grasping the material.

# Notes

This is where all my project notes will be stored. I’ll split them into headers for easy reading and focused discussion.

---

## First Glance

At first glance, I can see the project is built from **three factory functions**:

* `Gameboard`
* `Cell`
* `GameController`

Nothing is global—everything lives inside these functions. They’re capitalized, which usually implies constructors, but in this case, they’re just **factory functions** that return objects.

> **Note:** Capitalized function names are a convention. These are not constructors using `new`, they are regular functions returning objects.

Let’s go over each one and guess what it does—then we’ll ask ChatGPT if we were right.

---

## `Gameboard` Function

This function handles everything related to the game board.

It starts with three variables:

```js
const rows = 6;
const columns = 7;
const board = [];
```

These are used in a nested loop to create a 2D array (the game grid):

```js
for (let i = 0; i < rows; i++) {
  board[i] = [];
  for (let j = 0; j < columns; j++) {
    board[i].push(Cell());
  }
}
```

So what's happening here?

* The outer loop creates 6 empty arrays (rows).
* The inner loop fills each row with 7 `Cell()` objects.
* This gives us a 6x7 board made up of cell objects.

---

## `Cell` Function

This function manages the state of each cell on the board:

```js
function Cell() {
  let value = 0;

  const addToken = (player) => {
    value = player;
  };

  const getValue = () => value;

  return {
    addToken,
    getValue,
  };
}
```

This simple factory function stores a `value` (initially `0`) and exposes two methods:

* `addToken(player)` sets the cell’s value to the player number (1 or 2).
* `getValue()` returns the value.

Because `value` is scoped inside the function, outside code **can’t modify it directly**—it can only be changed via `addToken()`. This is a nice example of **encapsulation** using closures.

---

## Back to `Gameboard`

The next method is `getBoard`:

```js
const getBoard = () => board;
```

This just gives read access to the private `board` array.

### Now for the tough one: `dropToken`

```js
const dropToken = (column, player) => {
  const availableCells = board
    .filter((row) => row[column].getValue() === 0)
    .map((row) => row[column]);

  if (!availableCells.length) return;

  const lowestRow = availableCells.length - 1;
  board[lowestRow][column].addToken(player);
};
```

Let’s break it down:

* It takes `column` and `player` as arguments.
* It filters the board for rows where the cell in that column is empty (`getValue() === 0`).
* Then it **maps** those rows into a list of the actual available cells in that column.
* If there are no available cells, it returns early.
* Otherwise, it selects the **last available cell** (lowest on the board) and calls `addToken(player)` on it.

> **Note:** Your first instinct about `.filter().map()` was that it was “finding something.” Even though you didn’t fully get it at first, you followed the thread and found clarity—that's gold.

---

## `printBoard`

```js
const printBoard = () => {
  const boardWithCellValues = board.map((row) =>
    row.map((cell) => cell.getValue())
  );
  console.log(boardWithCellValues);
};
```

This function:

* Loops through the 2D board.
* Replaces each `Cell()` with its `.getValue()`.
* Prints the resulting 2D array to the console.

Using `.map()` here preserves the structure of the original array while transforming it—perfect for this use case.

---

## Gameboard Return

```js
return { getBoard, dropToken, printBoard };
```

This exposes the key functions to the outside world while keeping everything else private.

---

## `GameController` Function

This is the brain of the game. It:

* Creates players
* Tracks whose turn it is
* Calls `dropToken`
* Prints the board
* Switches players

Let’s walk through it:

### Initialization

```js
function GameController(playerOneName = "Player One", playerTwoName = "Player Two")
```

We can pass in custom names. Defaults are provided.

```js
const board = Gameboard();
```

We now have access to all public methods from `Gameboard`.

```js
const players = [
  { name: playerOneName, token: 1 },
  { name: playerTwoName, token: 2 },
];
```

Two player objects stored in an array.

---

### Switching Players

```js
let activePlayer = players[0];

const switchPlayerTurn = () => {
  activePlayer = activePlayer === players[0] ? players[1] : players[0];
};
```

This uses a **ternary operator** to toggle between the two players.

Equivalent `if` version:

```js
if (activePlayer === players[0]) {
  activePlayer = players[1];
} else {
  activePlayer = players[0];
}
```

```js
const getActivePlayer = () => activePlayer;
```

Returns the currently active player.

---

### Printing a New Round

```js
const printNewRound = () => {
  board.printBoard();
  console.log(`${getActivePlayer().name}'s turn.`);
};
```

Prints the updated board and shows which player is next.

---

### Playing a Round

```js
const playRound = (column) => {
  console.log(`Dropping ${getActivePlayer().name}'s token into column ${column}...`);
  board.dropToken(column, getActivePlayer().token);
  switchPlayerTurn();
  printNewRound();
};
```

This is the game loop:

1. Logs the move.
2. Drops the token.
3. Switches player.
4. Prints the board.

---

### Final Return

```js
printNewRound();

return {
  playRound,
  getActivePlayer,
};
```

Prints the board to start the game and exposes `playRound` and `getActivePlayer` for external use.

---

## Final Thoughts

This was a deep dive. The `dropToken` function, in particular, required some serious heavy lifting. But now that I’ve worked through it, I feel far more confident in understanding how the parts of a game can come together using design principles like encapsulation, modularity, and closures.

My plan going forward is to rebuild this game piece by piece starting with creating pseudo code and to use ChatGPT for feedback—not as a crutch, but as a checkpoint for my understanding.

Let’s keep going.








