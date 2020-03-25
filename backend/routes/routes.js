const createUser = require('./Users/createUser');
const getUser = require('./Users/getUser');

module.exports = function(restServer)
{
    restServer.post("/users", (req, res, next) => createUser(req, res, next));
    restServer.get("/users/:username", (req, res, next) => getUser(req, res, next));
    console.log("Routes configured and ready.")
}