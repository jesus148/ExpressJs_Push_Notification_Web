

// router general

const {Router} = require('express');

const router = Router()


const webpush = require('../webpush')


// donde se guarda la suscription del front
let pushSuscription;

// metodo post
// la primera suscripcion del usuario   
// esto se llama desde el src > public > main.js
router.post('/suscription',async(req , res)=>{
    // obteniendo la suscripcion del main.js
    pushSuscription = req.body;
    // // printer dev
    // console.log('Received subscription:', subscription);
    // printer front
    res.status(201).json({});

    // JSON.stringify:objeto de JavaScript en una cadena JSON.
    const payload=JSON.stringify({
        title:'my coustum notificacion',
        message:'hello world'
    })

    // ok
    try {
        // osea con esto datos se puede identificar donde enviaras la notificacion y enviaras el payload
        // enviando la notificaciony el dato(formato string) q quiero enviar
        await webpush.sendNotification(pushSuscription , payload)
    // error
    } catch (error) {
        console.log(error);
    }
})


// exportando
module.exports = router