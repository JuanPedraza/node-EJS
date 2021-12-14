const express = require('express')
const app = express()
const port = 3000

const cowsay = require('cowsay')


// Motor de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


// Rutas
app.get('/', (req,res)=>{
    res.render("index")
})

// Middlewares
app.use(express.static(__dirname + "/public"))











app.listen(port,()=>{
    console.log(cowsay.say({
        text: `Servidor corriendo en el puerto ${port}`,
        e: 'OO',
        T: 'U'
    }))

})
