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



module.exports = router