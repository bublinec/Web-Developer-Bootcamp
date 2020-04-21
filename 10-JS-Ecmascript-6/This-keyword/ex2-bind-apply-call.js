// CALL - call function with this set explicitly and comma separated args
var colt = {
    name: "Colt",
    sayHi: function(){
        return "Hi " + this.name
    }
}

var elie = {
    name: "Elie",
    // WET CODE!!! (write everything twice)
    sayHi: function(){
        return "Hi " + this.name
    }
}

// refactor using call
var colt = {
    name: "Colt",
    sayHi: function(){
        return "Hi " + this.name
    }
}

var elie = {
    name: "Elie",
}

console.log(colt.sayHi.call(elie))


// APPLY - call function with this set explicitly and arr of arguments
var colt = {
    name: "Colt",
    addNumbers: function(a, b, c){
        return this.name + String(a + b + c)
    }
}

var elie = {
    name: "Elie",
}

console.log(colt.addNumbers(1, 1, 1))
// it is the same, we only add other arguments in arr
console.log(colt.addNumbers.call(elie, [1,1,2]))
console.log(colt.addNumbers.apply(elie, [1,1,2]))
console.log(colt.addNumbers.call(elie, 1,1,2) === colt.addNumbers.apply(elie, [1,1,2]))

// BIND - add arguments gradually before calling
// most often only this argument
var elieCalc1 = colt.addNumbers.bind(elie, 1)
console.log(elieCalc1(1, 1));


