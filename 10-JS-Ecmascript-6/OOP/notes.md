# OOP

* programming approach based on object representation

* typically object is constructed from a class - blueprint
* e.i. object is a instance of class
* classes are abstract and modular so we can reuse and share them

However
* JS doesn't have classes built in (as Python/Java/C++ etc)
* we use new + constructor function to create object
* which is just a functiona that creates a objects when called
* name is capitalized - convention
* we pass all arguments and then attach it to the created object using this

## New keyword - does the trick!

- creates an empty object
- sets the keyword this in the following constructor to be that object
- adds __proto__ property (to link something)
- adds 'return this' to the following constructor function

*Dunder* = Double underscore __

## Multiple constructors
- we can dry code reuisng one constructor in another
- we need to change the context of this by call or apply (otherwise the context would be the object created by the reused constructor call)
- the best practice is to use apply(this, arguments)

*arguments* = list (technically array) of all arguments
(everything that I copy is actually wet code)
*content* = paralel to python's scope

## Prototype
- every constructor function has .prototype property
- this prototype property is an object that has a property .constructor
- which points back to construcotr function
- __proto__ points to the prototype so it is accessible to all instances created by the constructor
(see ex3)

## PROTOTYPE CHAIN
- prototype mathods and properties are accessible by any object created from that constructor
- we don't need to go through __proto__ JS automatically looks for own methods first, if not found moves up on the chain to prototype, using __proto__ link

- JS arr is actually an object (var arr is shortcut from new Array)
- and push is a method of it's prototype
- JS goes on the chain until __proto__ is not null and then evaluates expression as undefined
- btw, length is not a method is a property of arr, and each value is a property as well
- hasOwnPropert() is a method on the last part of the prototype chain
- every object in JS has __proto__