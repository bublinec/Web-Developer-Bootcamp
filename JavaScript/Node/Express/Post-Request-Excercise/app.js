//  SETUP
var express = require("express");
var bodyParser = require("body-parser"); // changes html into a DOM object
var app = express();
var port = 8200;
var friends = ["Samo", "Adam", "Majo", "Ander", "Danci"];

app.set("view engine", "ejs"); // we don't have to write .ejs all the time
app.use(express.static("public")); // include as used folder (wtih views)
app.use(bodyParser.urlencoded({extended: true}))

// start server
app.listen(port, function(){
    console.log("Server listening on the port " + port);
});


// ROUTES
app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends}); // pass variables to the template
});

app.post("/addfriend", function(req, res){
    friends.push(req.body.new_friend)
    res.redirect("/friends")
})


