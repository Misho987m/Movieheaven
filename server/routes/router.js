const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add movies
 *  @method GET /add-movie
 */
route.get('/add-movie', services.add_movie)

/**
 *  @description for update movie
 *  @method GET /update-movie
 */
// route.put('/update-movie', services.update_movie)

// route.get('http://localhost:8080/api/users', services.add_user)
// route.post('/update-user', services.update_user)

// API
route.get('/api/movies', controller.find);
route.post('/api/movies', controller.create);
route.post('/api/movies/:id', controller.update);
route.delete('/api/movies/:id', controller.delete);

// route.post('http://localhost:8080/api/users', controller.create);
// route.put('/api/users/:id', controller.update);
// route.delete('http://localhost:8080/api/users/:id', controller.delete);

module.exports = route