

// router general

const {Router} = require('express');

const router = Router()


const webpush = require('../webpush')


// donde se guarda la suscription del front
let pushSuscription;



// metodo post
// esta ruta suscribira al usuario
// la primera suscripcion del usuario   
// esto se llama desde el src > public > main.js
router.post('/suscription',async(req , res)=>{
    // obteniendo la suscripcion del main.js
    pushSuscription = req.body;
    // // printer dev
    // console.log('Received subscription:', subscription);
    // printer front
    res.status(201).json({});

    // todo esto lo usaremos abajo en la notificacion 
    // // lo que envias al front
    // // JSON.stringify:objeto de JavaScript en una cadena JSON.
    // const payload=JSON.stringify({
    //     title:'my coustum notificacion',
    //     message:'hello world'
    // })

    // // ok
    // try {
            // ENVIAS NOTIFICACION AL FRONT
    //     // osea con esto datos se puede identificar donde enviaras la notificacion y enviaras el payload
    //     // enviando la notificaciony el dato(formato string) q quiero enviar
    //     await webpush.sendNotification(pushSuscription , payload)
    // // error
    // } catch (error) {
    //     console.log(error);
    // }
})







// y esta ruta solo enviara notificaciones
// el front registra algo desde el main.js
router.post('/new-message', async(req , res)=>{

    // obteniene la data del front
    const {message} = req.body;

        // lo que envias al front
    // JSON.stringify:objeto de JavaScript en una cadena JSON.
    const payload=JSON.stringify({
        title:'my coustum notificacion',
        message:message
    })

    // ok
    try {
        // ENVIAS NOTIFICACION AL FRONT
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