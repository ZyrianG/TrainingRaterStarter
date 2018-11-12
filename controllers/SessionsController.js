const Sessions = require('../models').Sessions;

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json'); // return type for application
    let err, sessions; // defining variables
    
    let whereStatement = {};
    if (req.query.name) {
        whereStatement.name = {
            $like: `%${ req.query.name }%`
        };
    }   

    [err, sessions] = await to(Sessions.findAll({where: whereStatement}))

    return res.json(sessions); // initialize array for sessions
}

module.exports.getAll = getAll;

const get = async (req, res) => {
    let err, session;
    let sessionId = parseInt(req.params.sessionId)
    res.setHeader('Content-Type', 'application/json');
    
    [err, session] = await to(Sessions.findById({sessionId}))
    console.log(session);
    if (!session) { // error handling
        res.statusCode = 404;
        return res.json({ success: false, error: err});
    }
    return res.json(session);
}
module.exports.get = get;