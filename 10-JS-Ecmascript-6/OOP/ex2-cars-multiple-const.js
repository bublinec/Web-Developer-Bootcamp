// 1
// WET
function Car(make, model, year){
    this.make = make
    this.model = model
    this.year = year
    this.wheels = 4
}

function Motorcycle(make, model, year){
    this.make = make
    this.model = model
    this.year = year
    this.wheels = 2
}


// 2
// More dry (drier)
function Car(make, model, year){
    this.make = make
    this.model = model
    this.year = year
    this.wheels = 4
}

function Motorcycle(make, model, year){
    // reuse car constructor with change this context
    Car.call(this, make, model, year)
    this.wheels = 2
}

var babetta = new Motorcycle("Babetta", "207", 1983)
console.log(babetta);


// 3
// Eevn more dry (drier)
function Car(make, model, year){
    this.make = make
    this.model = model
    this.year = year
    this.wheels = 4
}

function Motorcycle(make, model, year){
    // use apply instead of call
    Car.apply(this, [make, model, year])
    this.wheels = 2
}

var babetta = new Motorcycle("Babetta", "207", 1983)
console.log(babetta);


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

var babetta = new Motorcycle("Babetta", "207", 1983)
console.log(babetta);


