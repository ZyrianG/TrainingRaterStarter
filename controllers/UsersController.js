const Users = require('../models').Users;

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json'); // return type for application
    let err, users; // defining variables
    
    let whereStatement = {};
    if (req.query.name) {
        whereStatement.name = {
            $like: `%${ req.query.name }%`
        };
    }   

    [err, users] = await to(Users.findAll({where: whereStatement}))

    return res.json(users);
}
module.exports.getAll = getAll;

const get = async (req, res) => { // return single user
    let err, user;
    let userId = parseInt(req.params.userId);
    res.setHeader('Content-Type', 'application/json');

    [err, user] = await to(Users.findById({userId}))
    console.log(user);
    if (!user) {
        res.statusCode = 404;
        return res.json({ success: false, error: err });
    }
    return res.json(user);
}
module.exports.get = get;

