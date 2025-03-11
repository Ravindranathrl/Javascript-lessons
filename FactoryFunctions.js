
// OBJECT CREATION IN JAVASCRIPT
// Factory functions in JavaScript are a design pattern used to create and return objects without the need for the class or new keyword, which are associated with constructor functions or classes. They are essentially functions that act as "factories" to produce objects with specific properties and behaviors. This pattern is a way to encapsulate object creation logic and is particularly useful for creating multiple instances of similar objects.

// Key Characteristics of Factory Functions
// No new Keyword Required: Unlike constructor functions or classes, factory functions don't require the new keyword to instantiate objects. They simply return an object when called.
// Encapsulation: They can include private data or logic by using closures, though the example you provided uses a simpler approach.
// Reusable Object Creation: They allow you to create multiple objects with the same structure but different data by passing arguments.
// Flexibility: You can easily add or modify properties and methods within the returned object.


function getDog(name, breed, age, weightInPounds) {
    return {
        name,
        breed,
        age,
        weightInPounds,
        eat() {
            console.log('Chomp!');
        },
        bark() {
            console.log('Woof!');
        }
    };
}

const anotherDog = getDog('Bairavaa', 'Chocolate Lab', 3, 60);
anotherDog.bark(); // Outputs: Woof!
anotherDog.eat();  // Outputs: Chomp!
console.log(anotherDog.name); // Outputs: Marley

//#Constructor Functions 
// so what are constructor functions in js


// Constructor functions in JavaScript are special functions used to create and initialize objects, typically with the new keyword. They serve as blueprints for creating multiple instances of objects with shared properties and methods, leveraging JavaScript's prototype-based inheritance. Constructor functions are a traditional way to implement object-oriented programming in JavaScript before the introduction of the class syntax (which is syntactic sugar over prototypes).

// Key Characteristics of Constructor Functions
// Use of new Keyword: When a constructor function is called with new, it creates a new object, sets up the prototype chain, and returns the object (unless a different object is returned explicitly).
// Prototype Chain: Methods and shared properties are often defined on the constructor's prototype property, allowing all instances to inherit them efficiently.
// this Context: Inside the constructor, this refers to the new object being created.
// Capitalization Convention: By convention, constructor function names start with an uppercase letter (e.g., Dog) to distinguish them from regular functions.

// this is always start with the Pascal Notation 


function Student(name,age,school,year){
    this.name = name
    this.age = age
    this.school = school
    this.year = year
}

Student.prototype.funcs = function(){
    return "Topper" + "name" + " " + "is " + this.name;
}

Topper = new Student('ravi' , 24, 'SJSU', 2024)


console.log(Topper)
console.log(Topper.funcs())



// In JavaScript, you can dynamically update and delete properties and methods of an object (whether created via a factory function or constructor function) at runtime. This flexibility allows you to modify the object's state or structure as needed. Below, I’ll explain how to update and delete properties and methods dynamically using the getDog factory function and Dog constructor function examples from earlier.

// 1. Updating Properties and Methods Dynamically
// You can change the value of existing properties or add new ones, and you can redefine or add new methods using assignment.

// Using Factory Function (getDog)
// javascript code below 


function getDog(name, breed, age, weightInPounds) {
    return {
        name,
        breed,
        age,
        weightInPounds,
        eat() {
            console.log('Chomp!');
        },
        bark() {
            console.log('Woof!');
        }
    };
}

const dog = getDog('Max', 'Dachshund', 5, 12);

// Updating existing property
dog.age = 6; // Changes age to 6
console.log(dog.age); // Outputs: 6

// Adding a new property
dog.color = 'brown'; // Adds a new property
console.log(dog.color); // Outputs: brown

// Updating an existing method
dog.bark = function() {
    console.log('Woof Woof!'); // Redefines bark
};
dog.bark(); // Outputs: Woof Woof!

// Adding a new method
dog.play = function() {
    console.log('Playing!');
};
dog.play(); // Outputs: Playing!





// Using Constructor Function (Dog)


function Dog(name, breed, age, weightInPounds) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightInPounds = weightInPounds;
}

Dog.prototype.eat = function() {
    console.log('Chomp!');
};
Dog.prototype.bark = function() {
    console.log('Woof!');
};

const dog = new Dog('Max', 'Dachshund', 5, 12);

// Updating existing property
dog.age = 6; // Changes age to 6
console.log(dog.age); // Outputs: 6

// Adding a new property
dog.color = 'brown'; // Adds a new property
console.log(dog.color); // Outputs: brown

// Updating an existing method (overrides instance method)
dog.bark = function() {
    console.log('Woof Woof!'); // Redefines bark for this instance only
};
dog.bark(); // Outputs: Woof Woof!

// Adding a new method to the instance
dog.play = function() {
    console.log('Playing!');
};
dog.play(); // Outputs: Playing!


// Notes on Updating
// Instance vs. Prototype: When you update a method like dog.bark, it only affects that specific instance (overriding the prototype method for that instance). To update the method for all instances, you’d modify Dog.prototype.bark.
// New Properties/Methods: Adding new properties or methods to an instance doesn’t affect other instances or the prototype.



// 2. Deleting Properties and Methods Dynamically
// You can remove properties and methods using the delete operator. However, delete only works on an instance’s own properties or methods, not those inherited from the prototype (unless you redefine them on the instance first).

// Using Factory Function (getDog)

const dog = getDog('Max', 'Dachshund', 5, 12);

// Deleting a property
delete dog.age; // Removes the age property
console.log(dog.age); // Outputs: undefined

// Deleting a method
delete dog.bark; // Removes the bark method
dog.bark(); // TypeError: dog.bark is not a function

// Note: If you try to delete a non-existent property, delete silently fails
delete dog.nonExistent; // No error, but does nothing


// Using Constructor Function (Dog)

const dog = new Dog('Max', 'Dachshund', 5, 12);

// Deleting a property
delete dog.age; // Removes the age property
console.log(dog.age); // Outputs: undefined

// Deleting a method from the instance (if redefined)
dog.bark = function() { console.log('Woof Woof!'); }; // Redefine on instance
delete dog.bark; // Removes the redefined bark
console.log(dog.bark); // Outputs: [Function: bark] (falls back to prototype)

// Deleting from prototype (affects all instances)
delete Dog.prototype.bark; // Removes bark from prototype
dog.bark(); // TypeError: dog.bark is not a function


function getDog(name, breed, age, weightInPounds) {
    return {
        name,
        breed,
        age,
        weightInPounds,
        eat() {
            console.log('Chomp!');
        },
        bark() {
            console.log('Woof!');
        }
    };
}

const dog = getDog('Max', 'Dachshund', 5, 12);

// Update age and add a new property
dog.age = 6;
dog.owner = 'Alice';
console.log(dog.age, dog.owner); // Outputs: 6 Alice

// Update bark method
dog.bark = function() {
    console.log('Woof Woof!');
};
dog.bark(); // Outputs: Woof Woof!

// Delete properties and method
delete dog.weightInPounds;
delete dog.bark;
console.log(dog.weightInPounds); // Outputs: undefined
dog.bark(); // TypeError: dog.bark is not a function