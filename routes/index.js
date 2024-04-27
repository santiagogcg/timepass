const express = require("express");
const route = express.Router();

route.get('/', (req, res) => {

    res.send(`<h1>Bienvenido</h1><h3>La hora actual es:${req.dateType}</h3><a href='/endroute'><button>Entrar</button></a>`)
    next()



})



module.exports = route