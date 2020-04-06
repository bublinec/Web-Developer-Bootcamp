const mongoose = require("mongoose"),
      passportLocalMongoose = require("passport-local-mongoose");
    

var userSchema = new mongoose.Schema({
    username: String,
    password: String
});

// add methods from passpor-local-mongoose package to the userSchema object
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);