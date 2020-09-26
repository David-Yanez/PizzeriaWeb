const express = require('express');
const morgan = require('morgan')

const app =express()

 app.set('port', process.env.PORT || 3000 );

app.use(morgan('dev'));

app.use('/api/',require('./routes/pizzeria.routes'))

module.exports = app;