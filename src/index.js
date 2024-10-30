

// logica del proyecto

// siempre al inicio el uso de variables de entorno
// podra usar en cualquier parte de tu proyecto 
require('dotenv').config();


const express = require('express');
const morgan = require('morgan');
const path= require('path')

const app = express();


// midlewares
// info del rest
app.use(morgan('dev'));
// data q viene de los forms en el front para poder usarlos 
app.use(express.urlencoded({extended:false}))
// compartir data bidireccional desde el front al back
app.use(express.json());

// routes
app.use(require('./routes/index'))


// static content
// src\index.js eso sera publica
// __dirname : src\ ==> es la ruta general donde esta el index.js y lo concatena con el public
// en si el _dirname sale esto C:\Users\jesus\Desktop\JESUS\EXPRESS_PROYECTOS\push_notificacion\src
// src\public : osea todo esta sera publica para el cliente
// http://localhost:3000/ : saldra los files esticos por default al iniciar la app(x reglas del static sale el index.html)
app.use(express.static(path.join(__dirname , 'public')))



app.listen(3000);
console.log('server listennig ' + 3000);
