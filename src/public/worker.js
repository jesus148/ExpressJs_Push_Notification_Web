
// este es el worker siempre se mantiene ejecutando


console.log('service worker entrando');


// esto es como si fuera un back para el front osea el front escucha los metodos rest en este caso solo sera el push
// captura lo recibido por el backend > routes > index.js
// 'push' : notificacion push 
// self es parecido al this
self.addEventListener('push',e=>{
    // obteniendo la data recibida del back
    // apenas recibimos los datos lo convertimos en formato json
    const data = e.data.json();
    // printer dev
    console.log(data);
    // console.log('notificacion recibida');

    // crea la notificacion
    // data.title : el titulo
    self.registration.showNotification(data.title , {
        body:data.message, //el mensaje
        icon:'https://1000marcas.net/wp-content/uploads/2020/01/logo-Real-Madrid.png'//el icono
    })
})
