const express = require('express');
const routes = express.Router();
const CollaboratorController = require('./controllers/CollaboratorController');

routes.get('/', CollaboratorController.create);

module.exports = routes;