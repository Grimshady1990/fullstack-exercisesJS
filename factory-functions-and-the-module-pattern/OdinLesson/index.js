// let globalAge = 23;

// function printAge(age) {
//     var varAge = 34;

//     if (age > 0) {
//         const constAge = age * 2;
//         console.log(constAge);
//     }
//     // console.log(constAge);

// }

// printAge(globalAge);


// // console.log(varAge);

// function makeAdding (firstNumber) {

//     const first = firstNumber;
//     return function resulting (secondNumber) {
//         const second = secondNumber;
//         return first + second;
//     }
// }

// const add5 = makeAdding(5);

// console.log(add5(5));

// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }

//     return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// function makeAdder(x) {
//     return function (y) {
//         return x + y;
//     };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add10(25));
// console.log(add5(35));

// const counter = (function () {
//     let privateCounter = 0;
//     function changeBy(val) {
//         privateCounter += val
//     }

//     return {
//         increment() {
//             changeBy(1);
//         },

//         decrement() {
//             changeBy(-1);
//         },

//         value() {
//             return privateCounter;
//         },
//     };
// })();

// console.log(counter.value());

// counter.increment();
// counter.increment();
// console.log(counter.value());
// counter.decrement();

// console.log(counter.value());

// ********************************************

const e = 10;
function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {

                return a + b + c + d + e;
            };
        };
    };
}

console.log(sum(1)(2)(3)(4));