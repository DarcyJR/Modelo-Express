exports.paginaInicial = (req, res) => {
    res.render('index',{
        titulo: "Express Iniciante"
    });
    //console.log('routes executado')
}

exports.trataPost = (req, res) => {
    res.send(`Pagina post ${req.body.cliente}`);
}