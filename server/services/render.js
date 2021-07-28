const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:8080/api/movies')
        .then(function (response) {
            console.log(response)
            res.render('index', { movies: response.data });
        })
        .catch(err => {
            res.send(err);
        })

}

exports.add_movie = (req, res) => {
    res.render('add_movie');
}

exports.update_movie = (req, res) => {
    console.log('HERE!!!!!', req.body);
    axios.put('http://localhost:8080/api/movies/' + req.query.id, req.body)
        .then(function (moviedata) {
            res.render("update_movie", { movie: moviedata.data })
        })
        .catch(err => {
            res.send(err);
        })
}
