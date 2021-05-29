const express = require('express');
const server = express();
const routes = require('./routes');

server.use(routes);

// HEROKU
const porta = process.env.PORT || 3333;

server.listen(porta, () => console.log(`🚀 Server started on port ${porta}`));