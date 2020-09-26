const express = require('express');
const morgan = require('morgan')

const app =express()

 app.set('port', process.env.PORT || 3000 );

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/',require('./routes/pizzeria.routes'))

module.exports = app;