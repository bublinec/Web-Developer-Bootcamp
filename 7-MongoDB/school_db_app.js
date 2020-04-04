const mongoose = require("mongoose");
// connect to the students db, if it doesn't exist create one
// use new parser and topology to avoid warnings - just a new version of mongo
mongoose.connect("mongodb://localhost/school", {useNewUrlParser: true , useUnifiedTopology: true});


// CREATE STUDENT SCHEAM (structure/pattern)
var studentSchema = new mongoose.Schema({
    forename: String,
    surname: String,
    year: Number
});


// CREATE STUDENT MODEL based on the schema
// There is created a collection called students in the db now
// (it is quite clever, e.g. it also handles Person -> people)
// it returns an object, with methods like .create, .find etc 
// while schem is just a pattern (object without any methods)
// Capital name - conventon for a model
var Student = mongoose.model("Student", studentSchema);


// CREATE NEW STUDENT
// var peter = new Student({
//     forename: "Peter",
//     surname: "Lauro",
//     year: 1
// })


// // ADD NEW STUDENT to the db
// // pass a callback fn to check 
// // (callback function runs after it is saved)
// peter.save(function(err, student){
//     if(err){
//         console.log("Something went wrong when saving!");
//         console.log(err);
//     }
//     else{
//         console.log("Saved:");
//         // student is already in the db, it is not the same as Peter
//         console.log("This is student in db (from callback)");        
//         console.log(student);
//     }
// })

// console.log("This runs before callback, because saving takes some time!");
// console.log(peter);


// CREATE + ADD (SHORTCUT)
Student.create({
    forename: "Juraj",
    surname: "Bublinec",
    year: 1
}, function(err, saved_student){
    if(err){
        console.log("Something went wrong: ");
        console.log(err);    
    }
    else{
        console.log("Studnet saved: ");
        console.log(saved_student);
    }
})


// RETIRIEVE STUDENTS from db
Student.find({}, function(err, students){
    if(err){
        console.log("Something went wrong!"); 
        console.log(err);
    }
    else{
        console.log("All students:");
        console.log(students);
    }
});