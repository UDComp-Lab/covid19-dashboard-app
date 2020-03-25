const User = require('../../../lib/ODM/User')
const validateRestifyReqJson = require('../../lib/Validation/validateRestifyReqJson')

module.exports = async function(req, res, next)
{
    // Validation: Ensure params is given and JSON is given
    if (
        req.params == null ||
        req.params["username"] == null ||
        typeof(req.params["username"]) != "string" ||
        req.params["username"].length === 0 &&
        validateRestifyReqJson(
            req,
            {
                questionLabel: "string",
                response: "boolean",
                daysSince: "number",
                
                detailedResponse: "object"
            }
        )
    )
    {
        
        res.status(422); // 422 for unprocessable.
        res.json(
            {
                success : false,
                error : "Invalid arguments."
            }
        );
        
        return next(false);

    }

    // TODO


}
