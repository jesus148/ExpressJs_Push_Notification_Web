
// file principal

// const { urlencoded, json } = require("express");


// llave publica copiar = que el .env 
const PUBLIC_VAPID_KEY='BKo5DErfqkhGTsyynE_juiGDurJnetCMY892IZebgM0AyFCpt_1o6F4wxXearnWcB29IEXOcTEndLP52boARTvk';



function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
  
    // const rawData = window.atob(base64);
    const rawData = Buffer.from(base64, 'base64'); 
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }


// <!-- esto es como si fuera el front -->
// metodo fecth para peticiones
// basicamente llamamos al back q esta en el src/index.js
const suscription = async ()=>{


      // Service Worker
    // registrar o suscribir un proceso
    // Un Service Worker es un tipo de script que permite interceptar y controlar las solicitudes de red y otros eventos en una aplicación web, lo cual puede mejorar el rendimiento y permitir funcionalidades sin conexión (offline). Vamos a desglosarlo:
    // basicamentes es como un interceptor de peticiones al igual que angular 
    // serviceWorker.register : llama al metodo register
    // '/worker.js': define el comportamiento del service worker 
    const register =await navigator.serviceWorker.register('/worker.js',{
        // define el alcance del service worker 
        // tiene control sobre toda la aplicacion 
        scope:'/'
    })
    console.log('new service worker');


    // Listen Push Notifications
    // conectarse y enviar notificaciones 
    // recibir notificaciones push en el navegador, generalmente en aplicaciones web push para enviar notificaciones a los usuarios.
    // registrer : de arriba :
    pushManager.subscribe()
     const suscription= register.pushManager.subscribe({
        userVisibleOnly:true,
        applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
    });




    // este metodo esta en el src\routes
    // fetch:un api de js para hacer peticiones rest, basicamente sirve para recibir notificaciones push en el navegador, generalmente en aplicaciones web push para enviar notificaciones a los usuarios.
    await fetch('/suscription',{
        method:'POST',
        // convierte un objto json a string
        body:JSON.stringify(suscription),
        headers:{
            "Content-Type":"application/json"
        }
    });
    console.log('suscrito');
}


// ejecuta funcion 
 suscription();