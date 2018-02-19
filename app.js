var app = require('./config/server.js');
var home = require('./app/routes/home')(app);
var rotaNoticias = require('./app/routes/noticias')(app);
var formularioInclusaoNoticias = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function(){
	console.log("Server ON!!! Porta: 3000");
});
