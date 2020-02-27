function printReverse(array)
{
    for(var i = array.length; i>=0; i--)
    {
        console.log(array[i]);
    }
}


// Tests
printReverse([0,1,2,3,4,5]);