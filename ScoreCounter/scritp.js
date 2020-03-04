// SCORE COUNTING
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
// Define the time object:
var time = {
    h       : 0,
    min     : 0,
    sec     : 0,

    set     : function(time_str){
        // Take string and set time according to it.
        len = time_str.length;
        this.sec = parseInt(time_str.slice(len-2, len));
        if(len == 4)
            this.min = parseInt(time_str.slice(len-4,len-3));
        else
            this.min = parseInt(time_str.slice(len-5,len-3));
        if(len>5)
            this.h = parseInt(time_str.slice(0, len-6));
        else
            this.h= 0;
    },

    decrement :function(n=1){
        // Decrement time by n sec.
        this.sec -= n;
        if(this.sec < 0){
            this.sec += 60;
            this.min -= 1;
        }
        if(this.min < 0){
            this.min += 60;
            this.h -= 1;
        }
    },

    toString : function(){
        // Return as a string.
        var output = "";        
        if(this.h != 0)
            output += this.h.toString() + ":";
        if(this.min < 10)
            output += "0";
        output += this.min.toString() + ":";
        if(this.sec < 10)
            output += "0";
        output += this.sec.toString();
        return output;
    },

    isZero : function(){
        if(this.h == 0 && this.min == 0 && this.sec == 0)
            return true;
        else
            return false;
    },

    toSec   : function(){
        return (3600*this.h + 60*this.min + this.sec)
    },
}

var start_button = document.querySelectorAll("button")[0];
var time_input = document.querySelectorAll("input")[2];
var counting = false // to prevent multiple coutning
var pause = false // to allow pause feture

start_button.addEventListener("click", function(){ 
    // pause feature 
    if(pause)
    {
        pause = false;
        start_button.textContent = "PAUSE";
        // in case it is changed while stopped
        original_time = time_input.value;
        time.set(time_input.value);
    } 
    else
    {
        if(counting)
        {
            pause = true;
            start_button.textContent = "START";
        }
    }

    // if already counting, do nothing
    if(counting)
        return false;

    original_time = time_input.value
    time.set(original_time);
    counting = true
    start_button.textContent = "PAUSE";
    // count down
    var timer = setInterval(function(){
        if(pause)
            return false;
        time.decrement();
        time_input.value = time.toString();
        if(time.isZero())
            clearInterval(timer);
    }, 1000)
})

// start on enter
time_input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        start_button.click();
    }
});


// RESET
var reset_button = document.querySelectorAll("button")[1];
reset_button.addEventListener("click", function(){
    // reset the score
    player_one_score = 0;
    player_two_score = 0;
    player_one_tag.textContent = player_one_score;
    player_two_tag.textContent = player_two_score;
    // reset timer
    pause = true;
    start_button.textContent = "START";
    time.set(original_time);
    time_input.value = original_time;
})