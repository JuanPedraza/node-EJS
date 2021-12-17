const express = require("express")
const router = express.Router()

router.get('/',(req,res)=>{
    res.render("agua", {
        arrayAgua : [
            {id: '555yyy', mes: "Enero", valor: 78909},
            {id: '555uuu', mes: "Febrero", valor: 60000},
        ]
    })
})

module.exports = router