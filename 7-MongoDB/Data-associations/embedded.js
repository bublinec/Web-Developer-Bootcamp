const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/demo", {useNewUrlParser: true, useUnifiedTopology: true});


// POST - title, content
// (needs to be first in order to embed)
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);


// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema] // embedded data - array of postSchemas type
});
var User = mongoose.model("User", userSchema);


// Create user -> push a comment -> save user
// (not really useful)

// Create user
// var newUser = new User({
//     email: "ron@hogwarts.edu",
//     name: "Ron Weasley"
// });

// newUser.posts.push({
//     title: "Quiddich World Cup",
//     content: "Anything..."
// })

// // Save user to db
// newUser.save(function(err, saved_user){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(saved_user);
//     }
// });

// Add comment to existing user
User.findOne({name: "Ron Weasley"}, function(err, user){
    if(err){
        console.log(err);
    }
    else{
        user.posts.push({
            title: "Quiddich is my life!",
            content: "blah blah blah"
        })
        user.save(function(err, saved_user){
            if(err){
                console.log(err);
            }
            else{
                console.log(saved_user);
            }
        })
    }
})