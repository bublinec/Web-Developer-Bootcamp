// SETUP
// Get packages
const express = require("express"),
      mognoose = require("mongoose"),
      passport = require("passport"),
      bodyParser = require("body-parser"),
      localStrategy = require("passport-local"),
      expressSession = require("express-session");
      
// Get models
const User = require("./models/user");

// App config - ORDER IS IMPORTANT!!!!!!!!!!
const app = express();
mognoose.connect("mongodb://localhost/secret");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSession({
    secret: "This is a str to encode/decode sessions - can be anything at all.",
    resave: false, // no ide about this settings
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session()); // AFTER SESSION HAS BEEN CONFIGURED

// set functions for encoding/decoding 
// (we have used those from passportLocalMongoose plugin, added in the module)
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Server config
const port = 8000;
app.listen(port, function(){
    console.log("Server listening on the port: ", port);
})


// ROUTES

// home
app.get("/", function(req, res){
    res.render("home");
})

// secret page

// middleware function
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret")
})

// sign up form
app.get("/register", function(req, res){
    res.render("register")
})

// sign up post
app.post("/register", function(req, res){
    username = req.body.username;
    password = req.body.password;
    console.log(password);
    
    user = new User({username: username});
    // register function takes user object, password
    // and returns user object with hash (encoded) password
    // and salt - the key for decoding
    // register method came from passpeortLocalMongoose
    User.register(user, password, function(err, user){
        if(err){
            console.log(err);
            res.render("register");
        }
        else{
            // if user created succesfuly, log him in and render secret page
            passport.authenticate("local")(req, res, function(){
                res.render("secret");
            })
        }

    });
});


// log in form
app.get("/login", function(req, res){
    res.render("login")
});

// log in post (suing middleware)
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res){})

// log out
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
})