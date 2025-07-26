# Introduction

I want to start by saying that this is not a project but is a very important lesson.

My project to create a tic-tac-toe game has become impossible for me because I cant thing in design patterns.

I was given a article called "Building A House From The Inside Out" It talks about not thinking about the final product and instead thinking deeper first about the structures and things that make the house work.

While that metaphor is all well and good it doesn't help me with my problem. 

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

This is a simple function factory 