function insertionSort(arr)
{
    var len = arr.length;
    var min_i;

    for(var i=0;i<len;i++)
        {
        // find min
        min_i = i;
        for(var j=i;j<arr.length;j++)
        {
            if(arr[j] < arr[min_i])
                min_i = j;     
        }
        // swap        
        temp = arr[i];
        arr[i] = arr[min_i];
        arr[min_i] = temp;
        }
    return arr;
}


// Tests
console.log(insertionSort([5,4,3,2,1]))