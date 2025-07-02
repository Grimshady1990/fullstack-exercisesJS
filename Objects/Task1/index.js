
// Test
console.log("Hello World");
// Part 1
function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + ", " + this.author + ", " + this.pages + " pages, " + this.read;
    }
}

const testBook = new Book("test-title", "test-author", 345, "not read yet");

console.log(testBook.info());

const journeysOutOfTheBody = new Book("Journeys Out of the Body", "Robert Monroe", 288, "Read it!");

console.log(journeysOutOfTheBody.info());

// Part 2
function Player(name, marker){
this.name = name;
this.marker = marker;
}

const player1 = new Player("john", "X");
const player2 = new Player("dave", "O");

Player.prototype.sayHello = function() {
    return "Hello, I'm a player";
}

console.log(player1.sayHello());
console.log(player2.sayHello());
console.log(player1.valueOf());
console.log(player1.hasOwnProperty('valueOf'));
console.log(Object.prototype.hasOwnProperty('valueOf'));
console.log(Object.getPrototypeOf(player1) === Player.prototype); // returns true
console.log(Object.getPrototypeOf(player2) === Player.prototype); // returns true
console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype); // true



