var http=require('http');
http.createServer(function(req,res) {
res.writeHead(200,{'Content-Type':'text/html'});
res.end('hello world');
}).listen(8080);




//node myfirst.js         in command prompt
//http://localhost:8080   in browser (i reccomend google chrome)
