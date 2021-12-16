const express = require('express')
const app = express()
const port = process.env.PORT ||  3000

const cowsay = require('cowsay')


// Motor de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


// Middlewares
app.use(express.static(__dirname + "/public"))


// Rutas
app.get('/', (req,res)=>{
    res.render("index")
})

app.get('/servicios',(req,res)=>{
    res.render("servicios")
})











app.listen(port,()=>{
    console.log(cowsay.say({
        text: `Servidor corriendo en el puerto ${port}`,
        e: 'OO',
        T: 'U'
    }))

})
