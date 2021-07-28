var Moviedb = require('../model/model');

// create and save new user
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }

    // new movie
    // console.log(req.body);
    const movie = new Moviedb({
        name: req.body.name,
        year: req.body.year,
        genre: req.body.genre,
        type: req.body.type,
        description: req.body.description,
        cast: req.body.cast,
        poster: req.body.poster,
    })

    // save movie in the database
    movie
        .save(movie)
        .then(data => {
            //res.send(data)
            res.redirect('/add-movie');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all movies/ retrive and return a single movie
exports.find = (req, res) => {
    console.log(req);
    if (req.query.id) {
        const id = req.query.id;

        Moviedb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found movie with id " + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Erro retrieving movie with id " + id })
            })

    } else {
        Moviedb.find()
            .then(movie => {
                res.send(movie)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error Occurred while retriving movie information" })
            })
    }


}

// Update a new idetified movie by movie id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    const id = req.params.id;
    Moviedb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update movie with ${id}. Maybe movie not found!` })
            } else {
                res.redirect('/admin');
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update movie information" })
        })
}

// Delete a movie with specified movie id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Moviedb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` })
            } else {
                res.send({
                    message: "movie was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete movie with id=" + id
            });
        });
}