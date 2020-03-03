// Score counting
var score = document.querySelectorAll("h1");

var player_one_tag = score[0];
var player_one_score = 0;

var player_two_tag = score[2];
var player_two_score = 0;

player_one_tag.addEventListener("click", function(){
    player_one_score += 1;
    player_one_tag.textContent = player_one_score;
})

player_two_tag.addEventListener("click", function(){
    player_two_score += 1;
    player_two_tag.textContent = player_two_score;
})

// TIMER
function toSec(time_arr)
{   
    return (3600*time_arr[0] + 60*time_arr[1] + time_arr[2])
}

function toHours(sec)
{
    var hours = ~~(sec/3600);
    sec = sec % 3600;
    var min = ~~(sec/60);
    sec = sec % 60;
    return [hours, min, sec]
}


var start = document.querySelectorAll("button")[0];

start.addEventListener("click", function(){
    // get input
    var text_field = document.querySelector("input");

    // get time
    time_str = text_field.value.trim()
    len = time_str.length;
    sec = parseInt(time_str.slice(len-2, len));
    min = parseInt(time_str.slice(len-5,len-3));
    if(len>5)
        hours = parseInt(time_str.slice(0, len-6));
    else
        hours = 0;
    time = [hours, min, sec];
    
    var total_sec = toSec(time);

    // count down
    setInterval(function(){
        time = toHours(total_sec)
        var output = "";        
        if(time[0] != 0)
            output = time[0].toString() + ":"
        output += time[1].toString()+":"+time[2].toString()
        text_field.value = output;
        total_sec -= 1;
    }, 1000)
})



// Reset
var reset = document.querySelectorAll("button")[1];

reset.addEventListener("click", function(){
    player_one_score = 0;
    player_two_score = 0;
    player_one_tag.textContent = player_one_score;
    player_two_tag.textContent = player_two_score;
})



