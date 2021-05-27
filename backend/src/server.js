const express = require('express');
const server = express();

server.listen('http://localhost:3333', () => {
  console.log('listening on http://localhost:3333');
})