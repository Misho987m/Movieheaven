const express = require('express');
const route = express.Router()

const services = require('../server/services/render');
const controller = require('../server/controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add movie
 *  @method GET /add-movie
 */
route.get('/add-movie', services.movie)

/**
 *  @description for update movie
 *  @method GET /update-movie
 */
route.get('/update-movie', services.movie)


// API
route.post('/api/movies', controller.create);
route.get('http://localhost:8080/api/movies', controller.find);
route.put('/api/movies/:id', controller.update);
route.delete('/api/movies/:id', controller.delete);


module.exports = route