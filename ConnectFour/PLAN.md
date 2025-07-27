# Introduction

I want to start by saying that this is not a project but is a very important lesson.

My project to create a tic-tac-toe game has become impossible for me because I cant thing in design patterns.

I was given a article called "Building A House From The Inside Out" It talks about not thinking about the final product and instead thinking deeper first about the structures and things that make the house work.

While the metaphor didn’t give me direct answers, it pointed me toward a valuable idea: breaking things down from the inside out. 

# My Problem

So what is my problem? That would be a long conversation depending on the context, but in this context my problem is simple. I can't read code well.

Sure I know how to read my own Lego Duplo creations but when it comes to other peoples mammoth Meccano structures then I am completely lost.

Reaching this point in The Odin Project has humbled me a little to say the least, but I am not one to cowier away from a challenge and I have enough self awareness to take a step back study when I reach a new echelon im not prepared for.

So how can this "building a house" article help me.

The article itself is not of much use but he has included a project that the author has written himself which is a game of Connect 4.

This is where I am going to solve a huge problem that I have which is understand complex code (complex to me). This will help me in to ways:

    1. It will help me better read and understand other peoples code.
    2. It will help me to be able to write and plan more complex code.

# The Plan

Okay great! So how am I actually going to use this information and turn it into a opportunity.

The how is easy I plan to spend as much time as is needed looking at this code I will live and breath this gentlemen console version of connect 4.

I will write my own version of his game building it piece by piece leaving myself comments to prove I have found understanding.

Once I have come to my conclusions I will use chatGPT as a mentor to mark my work to make sure im not getting the wrong end of the stick I will be sure to set it up in a way that forces me to find answers and not just mindlessly receive them.

# Notes

This is where all my project notes will be stored the format will be split into headers for each problem that needs to be discussed (only because I like headers for easy reading).

## First Glance

At first glance I can see that the project is split in to 3 function factories called:

- Gameboard
- Cell
- GameController

Nothing is outside of these functions, nothing is global, and they are Capitalized which makes me think that these are actually constructors. 

NOTE: Capitalized functions aren't necessarily constructors — that’s more a convention. These are factory functions that return objects.

Lets go over each one and take a guess at what we think each one is doing then we will ask ChatGPT if we were right.

## Gameboard Function

The Gameboard function seems to hold everything that concerns the game board.

The first thing it does is create 3 variables that are needed to create the game board

```js
const rows = 6;
const columns = 7;
const board = [];
```
How do these variables create the game board? They are fed to a nested loop which is common for making 2d arrays.

Let's take a look at this loop and try to figure out what it is doing.

```js
for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }
```
I think the first for loop is using the rows variable to create six empty arrays, then using the columns variable in the nested loop to fill them with values from the Cell function.

So WTH is the cell function??

## Cell Function

The cell function manages the state of each cell meaning it is where the functions that change the value of a cell are stored

```js
function Cell() {
  let value = 0;

  const addToken = (player) => {
    value = player;
  };

  const getValue = () => value;

  return {
    addToken,
    getValue
  };
}
```

This is a simple factory function that stores the value of each cell this contains two functions one that adds a token (changes the state of a cell from the default value 0, to the players marker either 1 or 2), And the second function calls the value variable through closure. This setup enforces immutability — I can’t just go cell.value = 1 from the outside. I must go through addToken().

With that out of the way lets get back to the game board.

# Game Board Function (continued)

After creating the board an arrow function called `getBoard` is made that calls the board variable again through closure.

```js
const getBoard = () => board;
```

The next one is a little bit tricky and might be difficult for me to process lets first take a look and discuss.

```js
const dropToken = (column, player) => {

    const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);

    if (!availableCells.length) return;

    const lowestRow = availableCells.length - 1;
    board[lowestRow][column].addToken(player);
  };
```

It starts with a arrow function that accepts a column and a player parameter.

Then it moves on to what looks like another arrow function but more complex. My guess is it creates a variable that is equal to board.filter and uses a arrow to create a if statement that is equal to zero it will then use another arrow to return row[column], no joke I have no idea what this is doing.

After it has filtered through the board if there is no length then that means the move is invalid and the code stops running.

If there is length then the code continues to the final stage and adds the players token at the lowest row, but again i have no idea how it gets there.

After speaking with ChatGPT I now have a better understanding of what is going on here so I will share my final thoughts.

NOTE: Even though you misunderstood .filter(...).map(...) at first, you had the instinct that it was finding something — and you later clarified it fully. That growth is gold.

### Final Thoughts (dropToken)

dropToken is an arrow function that takes two parameters: column and player. It starts by using the column parameter to target a specific column on the board. Then, it filters the rows in that column to find cells with a value of 0, meaning they are empty. These cells are mapped into a new array of just the available cells in that column.

Next, the function checks whether the availableCells list has any items. If the list is empty (length === 0), it means the column is full, and the function exits early.

If there are available cells, the function continues. It calculates the index of the lowest empty cell by using availableCells.length - 1, which gives the last item in the list. Finally, it calls .addToken(player) on that cell, updating its value with the player's token.

## Game Board (continued)

Wow that drop token took some heavy lifting, but I feel I have a much better understanding of what it is doing now.

Right on with the show, Next up is the function that prints the board to the console.

```js
const printBoard = () => {
    const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
    console.log(boardWithCellValues);
  };
```

This function takes no parameters. It uses .map() to loop through a 2D board and build a new 2D array made of the numeric values from each cell. It does this by calling getValue() on each cell. The new array is stored in boardWithCellValues and then printed to the console. .map() is used here because it returns a transformed version of the original array.

NOTE: the use of .map() here helps preserve the structure of the 2D array. This means it's perfect for transforming it without flattening or changing shape.


and finally the game board has this return 

```js
return { getBoard, dropToken, printBoard };
```

This return statement creates and returns an object containing three functions: getBoard, dropToken, and printBoard. This allows any code that uses the game board to call those methods from outside, while keeping everything else (like the actual board array) private inside the function.
