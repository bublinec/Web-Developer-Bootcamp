const mongoose = require("mongoose");

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

// export ('return') user model (object) from module 
module.exports = mongoose.model("User", userSchema);