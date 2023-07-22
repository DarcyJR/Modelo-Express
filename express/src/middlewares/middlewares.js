exports.middlewaresGlobal = (req, res, next)=>{
    console.log('Middleware executado');
    next();
}