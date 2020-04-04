const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/demo2", {useNewUrlParser: true, useUnifiedTopology: true});


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
    posts: [ // referenced data - array of id
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});
var User = mongoose.model("User", userSchema);


// ***************************************
// 1. CREATE POST AND ADD IT TO A USER
// ***************************************
// (3x - if I created only one, the output would show all the info not only id,
// however it stores only the id!!!)
Post.create({
    title: "How to brew polyjuice pt. 1",
    content: "Just kidding.. go to potions lecture!"
}, function(err, post){
    User.findOne({email: "hermione@hogwarts.edu"}, function(err, found_user){
        // doesn't push whole post, just the id (yes it is quite clever)
        found_user.posts.push(post)
        found_user.save(function(err, saved_user){
            console.log(saved_user);
        })
    })
});

Post.create({
    title: "How to brew polyjuice pt. 2",
    content: "Just kidding.. go to potions lecture!"
}, function(err, post){
    User.findOne({email: "hermione@hogwarts.edu"}, function(err, found_user){
        // doesn't push whole post, just the id (yes it is quite clever)
        found_user.posts.push(post)
        found_user.save(function(err, saved_user){
            console.log(saved_user);
        })
    })
});

Post.create({
    title: "How to brew polyjuice pt. 3",
    content: "Just kidding.. go to potions lecture!"
}, function(err, post){
    User.findOne({email: "hermione@hogwarts.edu"}, function(err, found_user){
        // doesn't push whole post, just the id (yes it is quite clever)
        found_user.posts.push(post)
        found_user.save(function(err, saved_user){
            console.log(saved_user);
        })
    })
});

// ***************************************
// 2. FIND USER, FIND ALL POST OF THAT USER
// ***************************************

// I could, get the user, get posts array which contains all the ids,
// then loopo over these ids and retrieve all the content
//  of posts individualy for each id.

// But, there is a showrtuct!
// populate("posts") will add other attributes to each post in the array of ids
// exec - return users with populated posts in the callback
User.findOne({email: "hermione@hogwarts.edu"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
    }
});