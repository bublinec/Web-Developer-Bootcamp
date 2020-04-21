// 4
// The most dry (driest)
function Car(make, model, year){
    this.make = make
    this.model = model
    this.year = year
    this.wheels = 4
}

function Motorcycle(make, model, year){
    // use arguments keyword instead of listing all of them
    Car.apply(this, arguments)
    this.wheels = 2
}

Motorcycle.prototype.isCool = true;

var babetta = new Motorcycle("Babetta", "207", 1983)
console.log(babetta);


// PROTOTYPE LINKS DEMONSTRATION
console.log(Motorcycle)
console.log(Motorcycle.prototype.constructor)
console.log(babetta.__proto__.constructor)

// PROTOTYPE PROPERTY ACCES DEMONSTRATION
// we don't need to go through babetta.__proto__.isCool
// JS looks for the method on babetta first, then automatically
// on the prototype
console.log(babetta.isCool)

// JS ARRAY IS (TECHNICALLY?) AN OBJECT 
var arr1 = [1, 2, 3] // is a shortcut for
var arr2 = new Array(1, 2, 3)
console.log(arr1)
console.log(arr2)
