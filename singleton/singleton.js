// Singleton pattern

// Singleton pattern is a creational pattern that restricts
// the instantiation of a class to one object.
// This is useful when exactly one object is needed to
// coordinate actions across the system.

class Singleton {
    constructor() {

        // what does .instance do?
        // it checks if the instance is already created
        // important to note that instance is a static property

        // inside this.random is assigned a random number every time
        this.random = Math.random();     
        
        if (Singleton.instance) {
            // when we return the instance, we are returning the previous instance
            return Singleton.instance;
        }
        
        
        Singleton.instance = this;
    }

    getInstance() {
        return Singleton.instance;
    }
}

const singleton = new Singleton();

console.log(singleton.random);

const singletonJr = new Singleton();

console.log(singletonJr.random);

// this only works when we have already created a new instance previously
// this will return null
const singleton2 = Singleton.getInstance();
