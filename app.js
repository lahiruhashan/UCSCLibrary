const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log("Connected to database " + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log("Database error " + err);
});

const app = express();

const port = 3000;

const users = require('./routes/users');
const books = require('./routes/books');

// CORS middleware
app.use(cors());

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser middleware
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/books', books);

app.get('/', (req, res) => {
    res.send("Invalid Endpoint");
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, () => {
    console.log("Server Started On Port " + port);
});