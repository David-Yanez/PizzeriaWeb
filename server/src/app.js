const express = require('express');
const morgan = require('morgan')
const cors = require('cors');

const app =express()

// Configuracion puerto 
 app.set('port', process.env.PORT || 3000 );


 // Middlewares 
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
origin: 'http://localhost:4200'}));



// Rutas
app.use(express.urlencoded({extended: false}));

app.use('/api/',require('./routes/pizzeria.routes'))

module.exports = app;