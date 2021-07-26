const http = require('http');
const today = require('./today');

const requestListen = function(req, res){
    res.writeHead(200);
    res.end(`Hello, World! Todays Date is: ${today.getDate()}`);
}

const port = 8080;
const server = http.createServer(requestListen);
console.log('Server is listening on port: '+port);
server.listen(8080);