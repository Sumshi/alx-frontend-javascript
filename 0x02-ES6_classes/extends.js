class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log('Generic animal sound');
    }
}

class Dog extends Animal {
    // The Dog class automatically inherits the constructor from Animal

    // Additional method specific to Dog
    bark() {
        console.log('Woof! Woof!');
    }
}

// Usage:
const myDog = new Dog('Buddy');
console.log(myDog.name); // Output: Buddy
myDog.makeSound(); // Output: Generic animal sound
myDog.bark(); // Output: Woof! Woof!
