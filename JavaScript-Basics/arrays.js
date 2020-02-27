function printReverse(array)
{
    for(var i=array.length; i>=0; i--)
    {
        console.log(array[i]);
    }
}

function isUniform(array)
{
    for(var i=0; i<array.length-1; i++)
    {
        if(array[i]!=array[i+1])
        {
            return false;
        }
    }
    return true;
}

function sumArray(array)
{
    s = 0;
    for(var i=0; i<array.length; i++)
    {
        s += array[i]
    }
    return s
}





// Tests
printReverse([0,1,2,3,4,5]);
console.log(isUniform([1,2,3,4,5]))
console.log(isUniform([1,1,1,1,1]))
console.log(sumArray([0,0,1,2,0,0]))