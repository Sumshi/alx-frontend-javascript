class Animal {
    makeSound() {
        console.log('Generic animal sound');
    }
}

class Cat extends Animal {
    makeSound() {
        console.log('Meow!');
    }
}

// Usage:
const myCat = new Cat();
myCat.makeSound(); // Output: Meow!
