var express = require('express');
var app = express();
var port = 3000

// ROUTES

// Get
// "/" => "Hi There!"
app.get('/', function(req, res){
    res.send("Hi There!");
})

// "/bye" => "Goodbye!"
app.get("/bye/:name", function(req, res){
    res.send("Goodbye " + req.params.name)
})

// Every get request (except for those already caught)
app.get("*", function(req, res){
    res.send("Not found, sorry buddy!")
})


// START SERVER (tell express to listen for requests)
app.listen(port, function() {
    console.log("Server listening on the port", port);
})