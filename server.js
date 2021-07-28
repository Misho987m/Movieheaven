const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require("body-parser");
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();
app.use(cors());

dotenv.config({ path: 'config.env' })
const PORT = 8080

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))


// load routers
app.use('/', require('./server/routes/router'))
app.use('/', require('./routes/users'));

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) });