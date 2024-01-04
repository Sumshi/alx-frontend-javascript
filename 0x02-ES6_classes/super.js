class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log('Generic animal sound');
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the constructor of the parent class
        this.breed = breed;
    }

    makeSound() {
        super.makeSound(); // Call the makeSound method of the parent class
        console.log('Woof! Woof!');
    }
}

// Usage:
const myDog = new Dog('Buddy', 'Labrador');
console.log(myDog.name); // Output: Buddy
console.log(myDog.breed); // Output: Labrador
myDog.makeSound(); // Output: Generic animal sound\nWoof! Woof!
