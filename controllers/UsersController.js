const Users = require('../models').Users;

const getAll = (req, res) => {
    res.setHeader('Content-Type', 'application/json'); // return type json

    let err, users; // defining variables

    users = [{FirstName: 'Zyrian', LastName: 'Gantuangco', Title: 'Support'},
    {FirstName: 'Peter', LastName: 'Parker', Title: 'Spider-man'},
    {FirstName: 'Tony', LastName: 'Stark', Title: 'Iron Man'},
    {FirstName: 'Eugene', LastName: 'Krabs', Title: 'Krusty'},
    {FirstName: 'Spongebob', LastName: 'Squarepants', Title: 'Sponge'},
    ];

    return res.json(users);
}

module.exports.getAll = getAll;