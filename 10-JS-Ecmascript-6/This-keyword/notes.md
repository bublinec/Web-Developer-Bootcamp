# Keyword this
- it's value depends on execution context

### Global context/rule:

* refers to the global objec -> window object (since we are in the browser)
* every variable in the global sccope is attached to window object (window.person === person)
* this applies also inside function (NOT DECLARED THOUGH!!!)
* ALWAYS DECLARE GLOBAL VARIABLES ON THE TOP!
* we could declare them in functions using this kwyword to attach them to the weindow - bad practice
* we can avoid that using "use strict" which makes this undefined in functions - added in ES5

### Implicit context/rule:

* when used in feclared function
* always refers to the closes parent object - the declared one

### Explicit context/rule:

* stating the context explicitly
* we use call/apply/bind to call the function with this set to something else
* often used to DRY code 
* .call(thisArg, a,b,c...)
* .apply(thisArg, [a, b, c...])
* see example1/2

* Bind
    - set this explixitly but DON NOT CALL THE FUNCTION
    - return just function definition with the this set explicitly
    - **uesful when we know ONLY some arguments but not all of them**
    - this is called partial application
    - useful for asynchronous code - doesn't run in order (e.g setTimeout)
    - see example 3

### New context/rule

* specific case - for creating objects
* new is a reserved keyword to create a new object
* we can also set the context of this using new keyowrd
* if we create a new object when calling function, 
the context of this will be that created object
* see example 4