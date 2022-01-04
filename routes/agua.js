const express = require("express")
const router = express.Router()

const agua = require('../models/agua')


router.get('/', async(req,res)=>{
    try {

        const arrayAguaDB = await agua.find()

        res.render('agua', {
            arrayAgua : arrayAguaDB
        })
        
    } catch (error) {
        console.log(error)
        
    }
})

router.get('/registrar',(req,res)=>{
    res.render('registrar')
})


router.post('/', async(req,res)=>{
    const body = req.body
    try {
        const aguaDB = new agua(body)
        await aguaDB.save()
        console.log(aguaDB)
        res.redirect('/agua')
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async(req,res)=>{

    const id = req.params.id

    try {

        const aguaDB = await agua.findOne({_id : id})
        console.log(aguaDB)

        res.render('detalle', {
            servicio: aguaDB,
            error: false
        })
        
    } catch (error) {
        console.log(error)
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra o no existe el id seleccionado'
        })
        
    }
})


module.exports = router