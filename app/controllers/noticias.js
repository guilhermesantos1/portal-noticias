var connection = null;
var noticiasModel = null;

module.exports.noticias = function(application, req, res) {
    this.connection = application.config.dbConnection();
    this.noticiasModel = new application.app.models.NoticiasDAO(this.connection);

    this.noticiasModel.getNoticias(function(error, result) {
        res.render('noticias/noticias', { noticias: result });
    });
};

module.exports.noticia = function(application, req, res) {
    var id_noticia = req.query;

    this.noticiasModel.getNoticia(id_noticia, function(error, result) {
        res.render('noticias/noticia', { noticia: result });
    });
};
