function printReverse(array)
{
    for(var i=array.length-1; i>=0; i--)
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
    // for(var i=0; i<array.length; i++)
    // {
    //     s += array[i]
    // }

    array.forEach(element => {
        s += element;
    });


    return s
}

function max(array)
{
    max = array[0];
    // for(var i=1; i<array.length; i++)
    // {
    //     if(array[i] > max)
    //         max = array[i];
    // }
    array.forEach(element => {
        if(element>max)
            max = element;
    });

    return max;
}


// Tests
printReverse([0,1,2,3,4,5]);
console.log(isUniform([1,2,3,4,5]));
console.log(isUniform([1,1,1,1,1]));
console.log(sumArray([0,0,1,2,0,0]));
console.log(max([1,2,3,4,5]));