# OOP

* programming approach based on object representation

* typically object is constructed from a class - blueprint
* e.i. object is a instance of class
* classes are abstract and modular so we can reuse and share them

However
* JS doesn't have classes built in (as Python/Java/C++ etc)
* we use constructor function to create object
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