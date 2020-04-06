// 1. SETUP
// * include packages

const expressSanitizer = require("express-sanitizer"),
      methodOverride = require("method-override"),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose"),
      express = require("express"),
      app = express();

// * configure app
// set view engine (so we don't have to include .ejs all the time)
app.set("view engine", "ejs");
// inlcude public dir in express
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
// set what the methodOverride should look for in the url
app.use(methodOverride("_method"));
app.use(expressSanitizer());

// * configure mongo db usnig mongoose
mongoose.connect("mongodb://localhost/blog", {useNewUrlParser: true,useUnifiedTopology: true});

// * setup the server
const port = 8000;
app.listen(port, function(err){
    if(err){
        console.log("\nSomething went wrong: \n", err);
    }
    else{
        console.log("\nServer listening on the port: \n", port);
        
    }
});


// 2. MONGOOSE SCHEMA + MODEL
var blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: {type: Date, default: Date.now},
    img_url: {type: String, default: "img/default_img.png"}
});
var Blog = mongoose.model("Blog", blogSchema);


// 3. RESTful ROUTES
// * index ("/blogs", GET)
// redirect get "/" (home) to index
app.get("/", function(req, res){
    res.redirect("/blogs")
})

app.get("/blogs", function(req, res){
    // retrieve the blogs from db
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("\nSomething went wrong: \n", err);
        }
        else{
            // render index passing blogs
            res.render("index", {blogs: blogs});
        }
    });
});

// * new ("blogs/new", GET)
app.get("/blogs/new", function(req, res){
    // render new template
    res.render("new");
});

// * create ("/blogs", POST)
app.post("/blogs", function(req, res){
    // sanitize body of blog (remove js)
    req.body.blog.body = req.sanitize(req.body.blog.body); 
    // get the data from the form (body-parser)
    // create blog (also includes into db)
    Blog.create(req.body.blog, function(err, created_blog){
        if(err){
            console.log("\nSomething went wrong: \n", err);
            res.redirect("/blogs/new");
        }
        else{
            console.log("\nCreated new blog: \n", created_blog);
            // callback function redirects to show
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// * show ("/blogs/:id", GET)
app.get("/blogs/:id", function(req, res){
    // find the blog with the id from the request
    Blog.findById(req.params.id, function(err, found_blog){
        if(err){
            console.log("\nSomething went wrong: \n", err);
            res.redirect("/blogs");
        }
        else{
            // render the show template in the callback, passing found blog            
            res.render("show", {blog: found_blog});
        } 
    });
});

// * edit ("/blogs/:id/edit", GET)
app.get("/blogs/:id/edit", function(req, res){
    // find the blog with the id from the request
    Blog.findById(req.params.id, function(err, found_blog){
        if(err){
            console.log("\nSomething went wrong: \n", err);
            res.redirect("/blogs");
        }
        else{
            // render the edit template in the callback, passing found blog            
            res.render("edit", {blog: found_blog});
        } 
    });
});

// * update ("/blogs/:id", PUT)
app.put("/blogs/:id", function(req, res){
    // sanitize body of blog (remove js)
    req.body.blog.body = req.sanitize(req.body.blog.body);
    // find the blog with the id from the request and update db
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updated_blog){
        if(err){
            console.log("\nSomething went wrong: \n", err);
            res.redirect("/blogs/" + req.params.id + "/edit");
        }
        else{
            console.log("\nCreated new blog: \n", updated_blog);
            // callback function redirects to show
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// * destroy ("/blogs/:id", DELTE)
app.delete("/blogs/:id", function(req, res){
    // find the blog with the id from the request and remove it from db
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(("\nSomething went wrong: \n", err));
        }
        else{
        // redirect to index
        res.redirect("/blogs");
        }
    });
});