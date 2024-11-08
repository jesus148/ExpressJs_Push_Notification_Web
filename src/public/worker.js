
// este es el worker siempre se mantiene ejecutando


console.log('service worker entrando');

// captura lo recibido por el backend > routes > index.js
// 'push' : notificacion push 
// self es parecido al this
self.addEventListener('push',e=>{
    // apenas recibimos los datos lo convertimos en formato json
    const data = e.data.json();
    // printer dev
    console.log(data);
    // console.log('notificacion recibida');

    self.registration.showNotification(data.title , {
        body:data.message,
        icon:'https://1000marcas.net/wp-content/uploads/2020/01/logo-Real-Madrid.png'
    })
})
