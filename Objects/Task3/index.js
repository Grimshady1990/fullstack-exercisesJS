// let user = new Object();

// let user2 = {
//     name: "John",
//     age: 30,
//     "likes birds": true,
// };

// console.log(user2.name);
// console.log(user2.age);
// user2.isAdmin = true;
// console.log(user2.isAdmin);
// delete user2.age;
// console.log(user2);
// user2["likes cats"] = false;
// console.log(user2["likes cats"]);
// delete user2["likes birds"];
// console.log(user2);

// let key = "likes birds";
// user2[key] = true;
// console.log(user2);
// let key2 = prompt("What do you want to know about the user?", "name");
// console.log( user2[key2] );

// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//     [fruit]: 4,
// };

// console.log( bag.apple );

// fruit = prompt("Which fruit to buy?", "pear");
// bag = {};
// bag[fruit] = 10;

// console.log( bag.pear );

// fruit = 'apple';
// bag = {
//     [fruit + 'Computers']: 20
// };

// console.log(bag.appleComputers);

// function makeUser(name, age) {
//     return {
//         // name: name,
//         // age: age,
//         name,
//         age :30,
//     };
// }

// let user = makeUser("John", 35);
// console.log(user.name);

// let obj = {
//     for: 1,
//     let: 2,
//     return: 3,
// };

// console.log(obj.for + obj.let + obj.return);

let obj = {
    0: "test",
};

console.log(obj["0"]);
console.log(obj[0]);

// continue working through the follow lesson
// https://javascript.info/object