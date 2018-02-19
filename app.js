var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('<html><body>Portal de noticias</body></html>')
});

app.listen(3000, function(){
	console.log("server rodando com Express na porta >>> 3000");
});