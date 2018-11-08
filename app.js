var express = require('express');

var app = express();

app.get('/', (req, res) => {res.send("Hello There!")});

module.exports = app; //lets you use this module in other places