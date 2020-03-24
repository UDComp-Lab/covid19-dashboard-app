const User = require('../../lib/ODM/User');

module.exports = function(req, res, next)
{
    console.log(req.body);

    next();
}