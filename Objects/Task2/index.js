// let animal = {
//     jumps: null
// };
// let rabbit = {
//     __proto__: animal,
//     jumps: true
// };

// alert( rabbit.jumps );

// delete rabbit.jumps;

// alert( rabbit.jumps );

// delete animal.jumps;

// alert( rabbit.jumps );

// Part 2

// let head = {
//     glasses: 1,
    
    
// };

// let table = {
//     pen: 3,
//     __proto__:head
    
   
// };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__:table
    
    
// };

// let pockets = {
//     money: 2000,
//     __proto__: bed
    
// };

// console.time('head.glasses'); // Start a timer with a label
// // Code to be benchmarked

// for (let i = 0; i < 1; i++) {
//   console.log(head.glasses);
  
// }
// console.timeEnd('head.glasses');

// console.time('pockets.glasses'); // Start a timer with a label
// // Code to be benchmarked

// for (let i = 0; i < 1; i++) {
//   console.log(pockets.glasses);
  
// }
// console.timeEnd('pockets.glasses');

// Part 3

// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.eat();

// Part 4

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple

// https://javascript.info/prototype-inheritance




