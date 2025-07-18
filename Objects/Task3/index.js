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

// let obj = {
//     0: "test",
// };

// console.log(obj["0"]);
// console.log(obj[0]);

// let obj = {};
// obj.__proto__ = 5;
// console.log(obj.__proto__);


// let user = {};

// console.log(user.noSuchProperty === undefined);

// let user = { name: "John", age: 30 };

// console.log( "age" in user);
// console.log( "blablabla" in user);



// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// };

// for (let key in user) {
//     console.log( key );

//     console.log( user[key] );
// }

// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     "1": "USA"
// };

// for (let code in codes) {
//     console.log(code);
// }

// let user = {
//     name: "John",
//     surname: "Smith",
// }

// console.log(user.name);

// user.name = "Pete";

// console.log(user.name);

// delete user.name;

// console.log(user.name);

// function isEmpty(obj) {
//     if (Object.keys(obj).length === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// let schedule = {};

// console.log(isEmpty(schedule));

// schedule["8:30"] = "get up!";

// console.log(isEmpty(schedule));

// // continue working through the follow lesson
// // https://javascript.info/object