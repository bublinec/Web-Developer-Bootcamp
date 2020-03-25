const http = require('http');
const port = 8000;

const server = http.createServer(onRequest);




function onRequest(req, res){
    res.writeHead(200, {'Conten-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
}


server.listen(port, function(error){
    if(error){
        console.log("Something went wrong.");
    }
    else{
        console.log("Server is listening");
    }        
})