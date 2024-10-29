

// router general

const {Router} = require('express');

const router = Router()


const webpush = require('../webpush')


// metodo post
router.post('/suscription',(req , res)=>{
    console.log(req.body);
    res.status(200).json();
})


// exportando
module.exports = router