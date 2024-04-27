const horaMiddleware = ((req, res, next) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const FormatoFecha = `${hours}:${minutes}:${seconds}`;
    req.dateType = `Son las ${FormatoFecha}`;



    next()


});


module.exports = horaMiddleware;










