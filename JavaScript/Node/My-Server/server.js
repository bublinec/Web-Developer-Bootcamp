const http = require('http');
const fs = require('fs')
const port = 8000;
const server = http.createServer(onRequest);


function onRequest(req, res){
    res.writeHead(200, {'Conten-Type': 'text/html'});
    fs.readFile('index.html', function(error, data){
        if (error){
            res.writeHead(404)
            res.write('Page not found!')
        }
        else {
            res.write(data)
        }
        res.end()
        
    })
}


server.listen(port, function(error){
    if(error){
        console.log("Something went wrong.");
    }
    else{
        console.log("Server is listening on the port: " + port);
    }        
})