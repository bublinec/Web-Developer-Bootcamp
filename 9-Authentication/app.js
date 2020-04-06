// SETUP
// Get packages
const express = require("express"),
      mognoose = require("mongoose"),
      passport = require("passport"),
      bodyParser = require("body-parser"),
      localStrategy = require("passport-local"),
      expressSession = require("express-session");
      passportLocalMongoose = require("passport-local-mongoose");

// Get models
const User = require("./models/user");

// App config
const app = express();
mognoose.connect("mongodb://localhost/secret", {useNewUrlParser: true,useUnifiedTopology: true});
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(expressSession({
    secret: "This is a str to encode/decode sessions - can be anything at all.",
    resave: false, // no ide about this settings
    saveUninitialized: false
}))

// set functions for encoding/decoding 
// (we have used those from pasportLocalMongoose plugin, added in the module)
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Server config
const port = 3000;
app.listen(port, function(){
    console.log("Server listening on the port: ", port);
})


// ROUTES

// home
app.get("/", function(req, res){
    res.render("home");
})

// secret page
app.get("/secret", function(req, res){
    res.render("secret")
})

// sign up form
app.get("/register", function(req, res){
    res.render("register")
})

app.post("/register", function(req, res){

})
