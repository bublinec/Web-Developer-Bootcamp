// Global context
var people = ["Peter", "Laura"]

// this would work in browser, not here as we don't have any window
// console.log(people === window.people);


// Implicit context
var person = {
    firstName: "Colt",
    sayHi: function(){
        // implicit context - refers to the closest parent object - person
        return "Hi " + this.firstName
    },
    determineContext: function(){
        return this === person // true
    },
    dog: {
        sayHello: function(){
            return "Hello " + this.firstName // undefined
        },
        determineContext: function(){
            return this == person // flase
        }
    }
}

console.log(person.sayHi());
console.log(person.determineContext());

console.log(person.dog.sayHello());
console.log(person.dog.determineContext());

// Explicit context - set this to person
console.log(person.dog.sayHello.call(person));
console.log(person.dog.determineContext.call(person));


