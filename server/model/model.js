const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    year : {
        type: Number,
        required: true,
    },
    genre : {
        type: String,
        required: true,
    },
    type : {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    cast : {
        type: String,
        required: true,
    },
    poster : {
        type: String,
        required: true,
    },
    trailerLink : {
        type: String,
        required: false,
    },
    movieLink : {
        type: String,
        required: false,
    }
})
const Moviedb = mongoose.model('moviedb', schema); 
module.exports = Moviedb;