console.log("Print all numbers in between -10 and 20:")
for(var i=-10;i<20;i++)
{
    console.log(i)
}


console.log("Print all even numbers in berween 10 and 40:")
var counter = 10
while(counter<40)
{
    console.log(counter)
    counter += 2
}


console.log("Print all odd numbers in berween 300 and 333:")
for(var i=301;i<333;i+=2)
{
    console.log(i)
}


console.log("Print all numbers divisible by 5 and 3 in between 5 and 50:")
for(var i=5;i<50;i++)
{
    if(i%15 == 0)
    {
        console.log(i)
    }
}