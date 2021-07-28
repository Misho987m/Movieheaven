const express = require('express');
const router = express.Router();
const axios = require('axios');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('index'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

router.get('/index2', ensureAuthenticated, (req, res) =>
  res.render('index2', {
    user: req.user
  })
);



router.get('/movies',ensureAuthenticated, (req, res) => {
  axios.get('http://localhost:8080/api/movies')
    .then(function (response) {
      // console.log(response);
      res.render('movies', { movies: response.data, user: req.user})
    })
    .catch(err => {
      res.send(err);
    })
});

router.get('/kids',ensureAuthenticated, (req, res) => {
  axios.get('http://localhost:8080/api/movies')
    .then(function (response) {
      // console.log(response);
      res.render('kids', { movies: response.data, user: req.user})
    })
    .catch(err => {
      res.send(err);
    })
});

router.get('/tvseries',ensureAuthenticated, (req, res) => {
  axios.get('http://localhost:8080/api/movies')
    .then(function (response) {
      // console.log(response);
      res.render('tvseries', { movies: response.data, user: req.user})
    })
    .catch(err => {
      res.send(err);
    })
});

// router.get('/movies', ensureAuthenticated, (req, res) =>
//   res.render('movies', {
//     user: req.user
//   })
// );

router.get('/tvseries', ensureAuthenticated, (req, res) =>
  res.render('tvseries', {
    user: req.user
  })
);

router.get('/kids', ensureAuthenticated, (req, res) =>
  res.render('kids', {
    user: req.user
  })
);

router.get('/aboutus', ensureAuthenticated, (req, res) =>
  res.render('aboutus', {
    user: req.user
  })
);

router.get('/contact', ensureAuthenticated, (req, res) =>
  res.render('contact', {
    user: req.user
  })
);

module.exports = router;
