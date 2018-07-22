var http=require('http');
var dte=require('./exportdatemodule.js');
http.createServer(fuction(req,res);
res.writeHead(200,{'Content-Type':'text/html'});
res.write("Date & Time  "+ dte.myDateTime());
res.end();

}).listen(8081);
