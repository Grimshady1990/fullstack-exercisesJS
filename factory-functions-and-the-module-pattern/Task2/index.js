// function outer() {
//     const outerVar = "Hey I am an outer var";
    
//     function inner() {
//         const innerVar = "Hey I am an inner var";
//         console.log(innerVar);
//         console.log(outerVar);
//     }

//     return inner;
// }

// const innerFn = outer();

// innerFn();

// function createGreeting(greeting = "") {
//     const myGreet = greeting.toUpperCase();
//     return function(name) {
//         return `${myGreet} ${name}`
//     };
// }

// const sayHello = createGreeting('hello');
// const sayHey = createGreeting('hey');
// console.log(sayHello('fizz pop'));
// console.log(sayHey('Umm Bop'));

function createGame(gameName) {
    let score = 0;

    return function win() {
        score ++;
        return `Your name ${gameName} score is ${score}`;
    }
}

const hockeyGame = createGame('Hockey');

console.log(hockeyGame());
console.log(hockeyGame());
console.log(hockeyGame());
console.log(hockeyGame());
console.log(hockeyGame());

const soccerGame = createGame('Soccer');

console.log(soccerGame());
console.log(soccerGame());
console.log(soccerGame());
console.log(soccerGame());
console.log(soccerGame());