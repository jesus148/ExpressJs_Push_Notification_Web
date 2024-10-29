
const webpush = require('web-push');


// printer variables de entorno
// console.log(process.env.PUBLIC_VAPID_KEY , process.env.PRIVATE_VAPID_KEY);



// webpush.setVapidDetails()se usa para enviar notificaciones push desde un servidor a dispositivos del cliente (como navegadores). Este método configura los detalles de autenticación VAPID (Voluntary Application Server Identification for Web Push), que es un estándar de autenticación para garantizar que las notificaciones provienen de una fuente legítima.
// mailto:jorgecop149@gmail.com : propietario del servidor
// PUBLIC_VAPID_KEY: Se usa para identificar el servidor y validar el origen de la notificación. Este se comparte con el cliente al suscribirse a las notificaciones.
// PRIVATE_VAPID_KEY: Se usa para firmar las notificaciones y verificar su autenticidad. Este debe mantenerse seguro en el servidor, ya que garantiza que solo tu servidor pueda enviar notificaciones push.
webpush.setVapidDetails('mailto:jorgecop149@gmail.com',PUBLIC_VAPID_KEY, PRIVATE_VAPID_KEY);


// exportando
module.exports = webpush;