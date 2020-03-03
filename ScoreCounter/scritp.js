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
var start = document.querySelectorAll("button")[0];

start.addEventListener("click", function(){
    // get input
    var text_field = document.querySelector("input");
    var time_str = text_field.value

    // time object
    var time = {
        h       : h,
        min     : min,
        sec     : sec,

        set     : function(time_str){
            // Take string and set time according to it.
            time_str = text_field.trim()
            len = time_str.length;
            this.sec = parseInt(time_str.slice(len-2, len));
            min = parseInt(time_str.slice(len-5,len-3));
            if(len>5)
                this.h = parseInt(time_str.slice(0, len-6));
            else
                this.h= 0;
        },

        toSec   : function(){
            return (3600*this.h + 60*this.min + time_arr[2])
        },

        toHours : function(){
            this.h = ~~(this.sec/3600);
            this.sec = this.sec % 3600;
            this.min = ~~(this.sec/60);
            this.sec = this.sec % 60;
        }

        toString : function(){

        }
        }
}

    
    }





    // count down
    setInterval(function(){
        time = toHours(total_sec)
    
        // create output
        var output = "";        
        if(time[0] != 0)
            output = time[0].toString() + ":";

        if(time[1]<10)
            output += "0"+time[1].toString()+":"
        else
            output += time[1].toString()+":"

        if(time[1]<10)
            output += "0"+time[1].toString()+":"
        else
            output += time[1].toString()+":"

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



