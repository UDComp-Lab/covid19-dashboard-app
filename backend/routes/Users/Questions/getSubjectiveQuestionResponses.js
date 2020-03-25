const User = require('../../../lib/ODM/User')
const validateRestifyReqJson = require('../../lib/Validation/validateRestifyReqJson')

module.exports = async function(req, res, next)
{
        // Validation: Ensure params is given
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
    
        // Get
        await User.findOne(
            {
                username: req.params.username
            }
        ).then(
            (doc) =>
            {
                console.log("Get_Subjective_Question_Response Success");
                
                res.status(200);
                res.json(
                    {
                        success: true,
                        resource: doc.subjectiveSymptomsResponse
                    }
                )

                next()
            }
        ).catch(
            (err) =>
            {
                console.error("Get_Subjective_Question_Response encountered an error: " + err.toString());

                res.status(500);
                res.json(
                    {
                        success: true,
                        error: "Db error."
                    }
                )

                next(false)
            }
        );
}