// Functional paradigm

// First order functions

// Are functions that can be assigned to variables,
// passed as arguments to other functions, or returned
// from other functions.

function sum(x, y) {
    return x + y;
}

const response = sum(1, 2);

// Higher order functions

// Are functions that take other functions as arguments and this functions could be first order functions.

function operation(callback, y, b) {
    return callback(y, b);
}

operation(sum, 1, 2);

// Arrow functions

// Are functions that are written in a shorter syntax and are anonymous.

operation((x, y) => x * y, 1, 2);

// forEach

// forEach is inmutable method

const names = ["John", "Jane", "Mary"];

names.forEach((name) => console.log(name));


// sort

// sort is mutable method, it changes the original array

names.sort();


// map

// map is inmutable method

const namesUpperCase = names.map((name) => name.toUpperCase());

// reduce

// reduce is inmutable method

const numbers = [1, 2, 3, 4, 5];

// first parameter is the accumulator
// second parameter is the current value

const sumWithReduce = numbers.reduce((acc, number) => acc + number, 0);



// Class with modern syntax

// Class is a blueprint for creating objects with pre-defined properties and methods.

class Drink {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    info() {
        return `The drink ${this.name} costs ${this.price}`;
    }
}

const drink = new Drink("Coca Cola", 1.5);
console.log(drink.info());


// Class with old syntax

function Drink2(name, price) {
    this.name = name;
    this.price = price;
    this.info = function() {
        return `The drink ${this.name} costs ${this.price}`;
    }
}

const drink2 = new Drink2("Coca Cola", 1.5);
// console.log(drink2.info());


// Inheritance

// Inheritance is a way to create a new class from an existing class.

class Beer extends Drink {
    constructor(name, price, type) {
        super(name, price);
        this.type = type;
    }

    info() {
        return `The beer ${this.name} costs ${this.price} and is ${this.type}`;
    }
}

const beer = new Beer("Heineken", 2, "pale lager");
console.log(beer.info());