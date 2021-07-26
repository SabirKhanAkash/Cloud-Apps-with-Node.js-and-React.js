const http = require('http');

const requestListen = function(req, res) {
    res.writeHead(200);
    res.end('Hello World!');
}

const port = 8080;
const server = http.createServer(requestListen);
console.log('server is listening on port: '+port);
server.listen(8080);