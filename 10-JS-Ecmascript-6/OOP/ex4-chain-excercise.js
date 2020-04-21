function Vehicle(make, model, year){
    this.make = make
    this.model = model
    this.year = year
    this.isRunning = false
}

Vehicle.prototype.turnOn = function(){
    this.isRunning = true
}

Vehicle.prototype.turnOff = function(){
    this.isRunning = false
}

Vehicle.prototype.honk= function(){
    if(this.isRunning){
        return "beep"
    }
}

var babetta = new Vehicle("babetta", "210", 1983)
babetta.turnOn()
console.log(babetta);
console.log(babetta.honk());
babetta.turnOff()

