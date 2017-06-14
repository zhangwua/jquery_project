var http = require("http");
var url = require("url");



http.createServer(function(req,res){
	console.log(req.url);
	res.end();
}).listen(2000,"localhost");