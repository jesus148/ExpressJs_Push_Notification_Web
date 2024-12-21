
// file principal

// const { urlencoded, json } = require("express");


// llave publica copiar = que el .env 
const PUBLIC_VAPID_KEY=urlBase64ToUint8Array('BGtxOu3CWcBMWuCRzHnRGiTZxkDGIb7M8zYkOxRzZJSXYRqsNzz-PP_IR6VlR1i4CcJB7dQgPbbkdB-cLeimfkk');



// convieritendo el push en uint8Arrar en base 64
// clean up data so it's easier to send. 
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/')
  ;
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}



// <!-- esto es como si fuera el front -->
// metodo fecth para peticiones
// basicamente llamamos al back q esta en el src/index.js
const suscription = async ()=>{




// ===================================================
      // Service Worker
    // registrar o suscribir un procesoq

    // Un Service Worker es un tipo de script que permite interceptar y controlar las solicitudes de red y otros eventos en una aplicación web, lo cual puede mejorar el rendimiento y permitir funcionalidades sin conexión (offline). Vamos a desglosarlo:
    // basicamentes es como un interceptor de peticiones al igual que angular 
    // serviceWorker.register : llama al metodo register
    // '/worker.js': define el comportamiento del service worker 
    // const register =await navigator.serviceWorker.register( '/worker.js',{
    //     // define el alcance del service worker 
    //     // tiene control sobre toda la aplicacion 
    //     scope:'/'
    // })
    // console.log('new service worker');

      
    let register;
    
    // verificando si el navegador soporta service worker 
    // register 
    if ('serviceWorker' in navigator) {
       register =await navigator.serviceWorker.register('/worker.js', {
          scope: '/'
          // todo ok
      })/* .then(register => {
          console.log('Service Worker registered', register);
        // si hay errores
        }).catch(error => {
          console.error('Service Worker registration failed:', error);
      }); */
  } else {
      console.log('Service Workers not supported in this browser.');
  }
  // console.log('Service Worker registered', register);
  // viendo en el devtools  > f12 > aplication > service workers >lado derecho >source aparecer la ubicacion de tu service worker
  // los service worker solo aparecen una vez , a menos q modifiques 
// ========================================















  // ===================================================
    // Listen Push Notifications
    // conectarse y enviar notificaciones 
    // recibir notificaciones push en el navegador, generalmente en aplicaciones web push para enviar notificaciones a los usuarios. osea enviar notificaciones cada vez que yo quiera
    // registrer : de arriba :
    // pushManager.subscribe()
     const suscription=await register.pushManager.subscribe({
        userVisibleOnly:true,
        // PUBLIC_VAPID_KEY lo convierte a base64 pq no acepta string
        // saldra en tu browser > permitir notificaciones
        applicationServerKey: PUBLIC_VAPID_KEY
    });




    // este metodo esta en el src\routes
    // fetch:un api de js para hacer peticiones rest, basicamente sirve para recibir notificaciones push en el navegador, generalmente en aplicaciones web push para enviar notificaciones a los usuarios.
    await fetch('/suscription',{
        method:'POST',
        // convierte un objto json a string
        // enviando el dato q nesecita el servidor para poder usar la conexion web push
        body:JSON.stringify(suscription),
        headers:{
            "Content-Type":"application/json"
        }
    });
    console.log('suscrito');
}






// ESTE ENVIARA LAS NOTIFICACIONES 
// osea enviaremos al back lo escrito por los form
// obteniendo data de los form cliente 
// y el back nos devuelve la data como notificacion usamos el Worker.js para ver la notificacion
const form = document.querySelector('#myform');
const message = document.querySelector('#message');

// cuando se ejecuta el formulario
form.addEventListener('submit',e =>{
  
  // cancela el reseteo osea luego de enviar el form 
  // el reseteo del form se cancela
  e.preventDefault();

  // /new-message' 
  // src\routes\index.js
  fetch('/new-message',{
    method:'POST',   
    body:JSON.stringify({
      // envia el valor del input de arriba
      message:message.value
    }),
    headers:{
      'Content-type':'application/json'
    }
  })

  // luego de enviar la peticion resetea los valores
  form.reset();
})


// ejecuta funcion 
 suscription();





//  body:JSON.stringify(suscription) : es el objeto q se envia al back > routes > index.js
//  Received subscription: {
//   endpoint: 'https://fcm.googleapis.com/fcm/send/esW3qKPceG4:APA91bHuLxF_qbxirSO5Dm6BnCms1m02CQ2l4Eu69MbQUzuez8leeFp-l31pE97tr5P9CKXZaKtpYGWejpZWsVYCNdORevGcKJzt9RV8qWCYvvCneJG97MMMYwB_34z-bSG8_66HP43F',
//   expirationTime: null,
//   keys: {
//     p256dh: 'BLtPpexDvLCv18v8gS1XB5Px2u0lzEdnfXw1g0tMDFTstStb4DGTiFa3UwSquLJTGWACBZMoLv733GyeN8lYccY',
//     auth: 'tyYsnnqiXJMM_mWLb7KbmA'
//   }
// }