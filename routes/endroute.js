const express = require("express");
const endroute = express.Router();

endroute.get('/endroute', (req, res) => {



    res.send(`<h1>Ruta final</h1><h3>¡¡¡¡¡¡Bienvenido a la ruta final!!!!</h3>`)
    next()


})



module.exports = endroute