const express = require('express')
const bodyParser = require('body-parser')
const cowsay = require('cowsay')

require('dotenv').config()
require('./db')

const app = express()
const port = process.env.PORT ||  3000

// Motor de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


// Middlewares
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// Rutas
app.use('/',require("./routes/web"))
app.use('/agua', require('./routes/agua'))










app.listen(port,()=>{
    console.log(cowsay.say({
        text: `Servidor corriendo en el puerto ${port}`,
        e: 'OO',
        T: 'U'
    }))

})
