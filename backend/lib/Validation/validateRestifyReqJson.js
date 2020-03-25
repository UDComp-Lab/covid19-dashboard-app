/*
    validateRestifyReqJson.js

    This is a simple function that can be passed a req and an object with
    a bunch of required field and type pairs to ensure the request has them
    in the body.
*/

module.exports = function(restifyReq, requiredFieldTypePairs)
{
    // Fail if no body provided.
    if (restifyReq.body == null)
    {
        return false;
    }

    // Check if body has every value
    for (const [key, requiredType] of Object.entries(requiredFieldTypePairs))
    {

        if (
            restifyReq.body[key] == null ||
            typeof(restifyReq.body[key]) !== requiredType
        )
        {
            return false;
        }

    }


    return true; // Passed validation
}