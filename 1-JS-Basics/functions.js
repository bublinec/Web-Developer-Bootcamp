function isEven(n)
// Return True if n is even, Flase otherwise.
{
    return (n%2 ===0);
}

function factorialIterative(n)
{
    var s = 1;
    // corner case
    if (n === 0)
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
    if (n === 0)
        return 1;
    // INDUCTIVE STEP
    else
        return n*factorialRecursive(n-1);
}

function kebabToSnake(_str)
{
    var new_str = '';
    for(var i=0;i<_str.length;i++)
    {
        var _char = _str.charAt(i);
        if (_char === '-')
            new_str += '_';
        else
            new_str += _char;
    }
    return new_str;  
}

// Test
console.log(isEven(4))
console.log(factorialIterative(0))
console.log(factorialRecursive(5))
console.log(kebabToSnake("Peter-Lauro"))