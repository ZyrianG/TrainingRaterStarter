const express = require('express');

const app = express();

app.get('/', (req, res) => {res.send("Hello There!")});

module.exports = app; //lets you use this module in other places