var colt = {
    name: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.name);
        }, 1000)
    }
}

// the context of this IS NOT colt variable, because this is
// INSIDE FUNCTION CALL!!! => THIS WOULD REFER TO WINDOW IN THE BROWSER
// Therefore we need to set it explicitly using bind!!!
// We bind this, as it refers to colt in that context

var colt = {
    name: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.name);
        }.bind(this), 1000) 
    }
}

colt.sayHi()