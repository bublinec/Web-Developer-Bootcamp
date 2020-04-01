// SETUP
const express = require("express");
const app = express();
const request = require("request")
const port = 8400;

app.set("view engine", "ejs");

// Start server
app.listen(port, function(){
    console.log("Server listening on the port ", port);  
});

// ROUTES
app.get("/", function(req, res){
    res.render("search");
});


app.get("/results", function(req, res){
    var search_vale = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + search_vale + "&apikey=thewdb";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var results = JSON.parse(body);
            res.render("results", {results : results.Search});
        }
    });  
});