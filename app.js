//--------------- начало на частта с login & permissions ------------------- 


const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const bodyparser = require("body-parser");
const session = require('express-session');
const axios = require('axios');
const path = require('path');
var moviedb =  require('./server/model/model');

const { authUser, authRole } = require('./routes/basicAuth');
const ROLE = require('./models/User')

const app = express();
app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));
app.use('/images', express.static(path.resolve(__dirname, "assets/images")));


// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').mongoURI;
const { request } = require('http');

// Connect to MongoDB
mongoose
    .connect(
        db, { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
// app.use(express.urlencoded({ extended: true }));
// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());

// Express session
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));

app.get('/admin', authUser, authRole(), (req, res) => {
    axios.get('http://localhost:8080/api/movies')
        .then(function(response) {
            // console.log(response);
            res.render('admin', { movies: response.data })
        })
        .catch(err => {
            res.send(err);
        })
});



app.get('/update-movie', authUser, authRole(), (req, res) => {
    axios.get('http://localhost:8080/api/movies?', { params: { id: req.query.id } })
        .then(function(response) {
            res.render('update_movie', { movie: response.data })

        })
        .catch(err => {
            res.send(err);
        })
});

app.get('/add-movie', authUser, authRole(), (req, res) => {
    res.render('add_movie');
})

app.get('/index', (req, res) => {
    res.render('index')
});

app.get('/index2', authUser, (req, res) => {
    res.render('index2')
});

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/register', (req, res) => {
        res.render('register');
    })
    // app.get('/movies', authUser, (req, res) => {
    //   // axios.get('http://localhost:8080/api/movies')
    //   //   .then(function (response) {
    //   //     // console.log(response);
    //   //     res.render('movies', { movies: response.data })
    //   //   })
    //   //   .catch(err => {
    //   //     res.send(err);
    //   //   })
    //   res.render('movies');
    // })
app.get('/tvseries', authUser, (req, res) => {
    res.render('tvseries');
})
app.get('/kids', authUser, (req, res) => {
    res.render('kids');
})
app.get('/aboutus', authUser, (req, res) => {
    res.render('aboutus');
})
app.get('/contact', authUser, (req, res) => {
    res.render('contact');
})
app.get('/questions', (req, res) => {
    res.render('questions');
})
app.get('/cookiepolicy', (req, res) => {
    res.render('cookiepolicy');
})
app.get('/privacypolicy', (req, res) => {
    res.render('privacypolicy');
})
app.get('/terms', (req, res) => {
    res.render('terms');
})




app.get('/search',(req,res)=>{
    try {
        moviedb.find({$or:[{ "name" : { $regex: req.query.dsearch, $options: 'i' }},{ "genre" : { $regex: req.query.dsearch, $options: 'i' }}]},(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    res.render('search',{movies:data});
                }
             })
    } catch (error) {
        console.log(error);
    }
});

app.use('/', require('./server/routes/router'));
app.use('/', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));