// SETUP
var express = require("express");
var app = express();
var port = 3000;

// Start server
app.listen(port, function(){
    console.log("Server listening on the  port " + port);
})

// ROUTES
// Home
app.get("/", function(req, res){
    res.send("This is homepage of my excercise");
})

// Animals
app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        "dog": "Woof! Woof!",
        "cat": "Meow.",
        "cow": "Mooooo!",
        "fish": "I hate you!",
        "rabbit": "",
        "sheep": "Beee!"
    }
    res.send(animal + " sounds like: " + sounds[animal])
})

// Repeat print
app.get("/repeat/:word/:n", function(req, res){
    var n = Number(req.params.n);
    var word = req.params.word;
    var response_str = "";
    for(var i=0; i<n;i++){
        response_str += word + ' ';
    }
    res.send(response_str);
})

// Not found
app.get("*", function(req, res){
    res.send("Sorry Buddy, but there is nothing in here!")
})
