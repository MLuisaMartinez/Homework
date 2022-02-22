const express = require('express')
const tipRoute = express.Router()

tipRoute.get('/', (req,res) =>{
    res.status(200).json({message: "You Got Tips"})
    })

tipRoute.get('tip/:total/:tipPercentage', (req, res) =>{
    console.log('Hit')
    let total = Math(req.params.total)
    let tipPercentage = Math.round(req.params * .20);
       console.log(total, tipPercentage)
})

    