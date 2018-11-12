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

const get = (req, res) => { // return single user
    let userId = parseInt(req.params.userId)
    res.setHeader('Content-Type', 'application/json')

    let users = [{ Id: 1, FirstName: 'Zyrian', LastName: 'Gantuangco', Title: 'Support'},
    { Id: 2, FirstName: 'Peter', LastName: 'Parker', Title: 'Spider-man'},
    { Id: 3, FirstName: 'Tony', LastName: 'Stark', Title: 'Iron Man'},
    { Id: 4, FirstName: 'Eugene', LastName: 'Krabs', Title: 'Krusty'},
    { Id: 5, FirstName: 'Spongebob', LastName: 'Squarepants', Title: 'Sponge'},
    ];

    let user = users.find(obj => obj.Id === userId);
    console.log(user);
    return res.json(user);
}
module.exports.get = get;