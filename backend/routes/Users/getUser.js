const User = require('../../lib/ODM/User');

module.exports = async function(req, res, next)
{
    if (
        req.params == null ||
        req.params["username"] == null ||
        typeof(req.params["username"]) != "string" ||
        req.params["username"].length === 0
    )
    {
        res.status(422); // 422 for unprocessable.
        res.json(
            {
                "success" : false,
                "error" : "Invalid arguments."
            }
        );
        
        return next(false);
    }

    await User.findOne( { "username" : req.params.username }, 
        (err, resource) =>
        {
            if (!err && resource != null)
            {
                res.status(200);
                res.json(
                    {
                        "success" : true,
                        "user" : resource.toObject()
                    }
                );

                return next();
            }
            else if (!err && resource == null)
            {
                res.status(404);
                res.json(
                    {
                        "success" : false,
                        "error" : "No such user."
                    }
                );

                return next(false);
            }
            else
            {
                res.status(500);
                res.json(
                    {
                        "success" : false,
                        "error" : "DB error."
                    }
                );

                return next(false);
            }
        } 
    );
}