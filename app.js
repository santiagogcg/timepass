const express = require("express")
const index = require("./routes/index.js")
const endroute = require("./routes/endroute.js")
const horaMiddleware = require("./middlewares/horaMiddleware.js")
const validarHora = require("./middlewares/validarHora.js")
const app = express()





app.use('/', horaMiddleware, index, endroute)




app.listen(5000, () => {
    console.log('Servidor escuchando puerto 5000')





})