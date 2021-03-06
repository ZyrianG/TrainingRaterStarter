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

// CORS
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 
      'X-Requested-With, content-type, Authorization, Content-Type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
  });

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
app.post('/sessions', sessions.create);
app.put('/sessions', sessions.update);

app.get('/users', users.getAll);
app.get('/users/:userId', users.get);
app.post('/users', users.create);
app.put('/users', users.update);
app.delete('/users', users.destroy);

module.exports = app; //lets you use this module in other places