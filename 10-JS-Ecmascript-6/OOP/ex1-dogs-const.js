function Dog(name, age){
    this.name = name
    this.age = age
    this.bark = function(){
        return this.name + " just barked."
    }
}

var rusty = new Dog("Rusty", 13)
var chelsea = new Dog("Chelsea", 1)

console.log(rusty);
console.log(chelsea);

console.log(chelsea.bark());
