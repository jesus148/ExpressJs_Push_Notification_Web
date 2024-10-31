

// router general

const {Router} = require('express');

const router = Router()


const webpush = require('../webpush')


// metodo post
// la primera suscripcion del usuario
router.post('/suscription',(req , res)=>{
    const subscription = req.body;
    console.log('Received subscription:', subscription);
    res.status(201).json({});
})


// exportando
module.exports = router