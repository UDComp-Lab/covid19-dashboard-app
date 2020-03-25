const createUser = require('./Users/createUser');

module.exports = function(restServer)
{
    restServer.post("/users", (req, res, next) => createUser(req, res, next));
    console.log("Routes configured and ready.")
}