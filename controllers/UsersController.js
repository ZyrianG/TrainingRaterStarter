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

    [err, user] = await to(Users.findById(userId))
    console.log(user);
    if (!user) {
        res.statusCode = 404;
        return res.json({ success: false, error: err });
    }
    return res.json(user);
}
module.exports.get = get;

const create = async (req, res) => {
    let err, user, userInfo;
    res.setHeader('Content-Type', 'application/json');

    userInfo = req.body;
    [err, user] = await to(Users.create(userInfo))
    if (err) {
        if (typeof err == 'object' && typeof err.message != 'undefined') {
            err = err.message;
        }
        
        if (typeof code != 'undefined') res.statusCode = code;
        res.statusCode = 422; // unprocessable entity
        return res.json({ success: false, error: err });
    }

    [err, user] = await to(user.save())
    if (err) {
        if (typeof err == 'object' && typeof err.message != 'undefined') {
            err = err.message;
        }
        
        if (typeof code != 'undefined') res.statusCode = code;
        res.statusCode = 422; // unprocessable entity
        return res.json({ success: false, error: err });
    }
    res.statusCode = 201;
    return res.json(user);
}
module.exports.create = create;

const update = async (req, res) => {
    let err, user, data;
    data = req.body;
    res.setHeader('Content-Type', 'application/json');


    [err, user] = await to(Users.update(data, {
        where: {
            id: data.id
        }
    }))

    if (err) {
        if (typeof err == 'object' && typeof err.message != 'undefined') {
          err = err.message;
        }
    
        if (typeof code !== 'undefined') res.statusCode = code;
        res.statusCode = 422
        return res.json({ success: false, error: err });
      }

      [err, user] = await to(user.save())
      if (err) {
        if (typeof err == 'object' && typeof err.message != 'undefined') {
            err = err.message;
        }
        
        if (typeof code != 'undefined') res.statusCode = code;
        res.statusCode = 422; // unprocessable entity
        return res.json({ success: false, error: err });
    }
    res.statusCode = 201;
    return res.json(user);
}
module.exports.update = update;

const destroy = async (req, res) => {
    let err, user, data;
    data = req.body;
    res.setHeader('Content-Type', 'application/json');


    [err, user] = await to(Users.destroy(data, {
        where: {
            id: id.data
        }
    }))
    if (err) {
        if (typeof err == 'object' && typeof err.message != 'undefined') {
            err = err.message;
        }
        
        if (typeof code != 'undefined') res.statusCode = code;
        res.statusCode = 422; // unprocessable entity
        return res.json({ success: false, error: err });
    }
    res.statusCode = 201;
    return res.json(user);
}
module.exports.destroy = destroy;