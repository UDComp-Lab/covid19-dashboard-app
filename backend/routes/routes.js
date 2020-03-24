const createUser = require('./Users/createUser');

module.exports = function(restServer)
{
    restServer.post("/users", createUser);
    console.log("Routes configured and ready.")
}