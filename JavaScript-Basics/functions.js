function isEven(n)
// Return True if n is even, Flase otherwise.
{
    if(n%2 == 0)
        return true
    else
        return false
}


function factorialIterative(n)
{
    var s = 1;
    // corner case
    if (n == 0)
        return 1;
    
    while(n>1)
    {
        s *= n;
        n -= 1;
    }
    return s;
}


function factorialRecursive(n)
{
    // BASE CASE
    if (n == 0)
        return 1;
    // INDUCTIVE STEP
    else
        return n*factorialRecursive(n-1);
}

// Test
console.log(isEven(4))
console.log(factorialIterative(0))
console.log(factorialRecursive(5))