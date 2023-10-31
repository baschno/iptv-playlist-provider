var fs = require('fs')
var http = require('http');
var server = http.createServer(function(req, res) {
        console.log('Received request for ' + req.url);
        res.writeHead(200);
        fs.readFile('data/response.txt', function (error, content) {
                res.end(content);
        })
});
server.listen(8111);
console.log("Server listening on port 8111");

