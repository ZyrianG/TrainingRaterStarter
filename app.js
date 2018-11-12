var express = require('express');
require('./config/config');
var models = require('./models');
require('./global_functions');
var sessions = require('./controllers/SessionsController');
var users = require('./controllers/UsersController');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {res.send("Hello There!")});

models.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.log('Unable to connect to the database.', err);
    });

if (CONFIG.app === 'dev') {
    models.sequelize.sync();
}

app.get('/sessions', sessions.getAll);
app.get('/sessions/:sessionId', sessions.get);

app.get('/users', users.getAll);
app.get('/users/:userId', users.get);

module.exports = app; //lets you use this module in other places