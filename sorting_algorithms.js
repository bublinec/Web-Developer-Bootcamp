


function insertionSort(arr)
{
    len = arr.length;
    for(var i=0;i<len;i++)
        {
        console.log(arr.slice(i,len));
            
        min_i = _min(arr.slice(i,len))
        // swap        
        temp = arr[i]
        arr[i] = arr[min_i]
        arr[min_i] = temp
        }
    return arr
}


// Tests
console.log(insertionSort([5,4,3,2,1]))