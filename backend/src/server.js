const express = require('express');
const server = express();
const routes = require('./routes');

// HEROKU
const porta = process.env.PORT || 3333;

server.listen(porta, () => console.log(`🚀 Server started on port ${porta}`));