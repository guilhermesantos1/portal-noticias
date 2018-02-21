module.exports.formulario_inclusao_noticia = function(application, req, res) {
    res.render('admin/form_add_noticia', { validacao: {}, noticia: {} });
};

module.exports.noticias_salvar = function(application, req, res) {
    var noticia = req.body;

    req.check('titulo','Título é obrigatório').isLength({ min: 1 });
    req.check('resumo','Resumo é obrigatório').isLength({ min: 1 });
    req.check('resumo','Resumo deve conter mais de 10 caracteres').isLength({ min: 10});
    req.check('autor','Autor é obrigatório').isLength({ min: 1 });
    req.check('data_noticia','Data é obrigatório').isLength({ min: 1 });
    req.check('noticia','Noticia é obrigatório').isLength({ min: 1 });

    var erros = req.validationErrors();

    if (erros) {
        res.render('admin/form_add_noticia', { validacao: erros, noticia: noticia });
        return;
    }

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result) {
        res.redirect('/noticias');
    });
};
