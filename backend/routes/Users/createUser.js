const User = require('../../lib/ODM/User');
const validateRestifyReqJson = require('../../lib/Validation/validateRestifyReqJson')

module.exports = async function(req, res, next)
{
    if (
        !validateRestifyReqJson(
            req,
            {
                // Base info
                "username" : "string",
                "birthYear" : "number",
                "bioSex" : "string",
                "ethnicity" : "string",
                "occupation" : "string",
                
                // Medical history
                "historyWithCancer" : "boolean",
                "hasDiabetes" : "boolean",
                "hasHeartDiseaseOrHypertension" : "boolean",
                "medicationsAffectImmuneSystem" : "boolean",
                "smokingHistory" : "boolean"
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

    // Throw error if trying to create a user that already exists.
    let success = true;
    let errorMsg = "Error";
    let errorStatus = 200;

    await User.find( 
        { 
            username : req.body.username
        } 
    )
    .then(
        (foundDocs) =>
        {
            if (foundDocs.length > 0) // Fail if we find more than zero conflicting usernames.
            {
                success = false;
                errorMsg = "Database already has user with same username.";
                errorStatus = 409; // 409 for conflict.
            }
        }
    )
    .catch(
        (err) =>
        {
            success = false;
            errorMsg = "DB error.";
            errorStatus = 500;
        }
    );

    // Check if failed.
    if (!success)
    {
        res.status(errorStatus); // 500 for server error.
        res.json(
            {
                success : success,
                error : errorMsg
            }
        );
        
        return next(false);
    }

    // Try to create new user
    let newUser = new User(
        {
            username: req.body.username,
            birthYear: req.body.birthYear,
            bioSex: req.body.bioSex,
            ethnicity: req.body.ethnicity,
            occupation: req.body.occupation,

            historyWithCancer: req.body.historyWithCancer,
            hasDiabetes: req.body.hasDiabetes,
            hasHeartDiseaseOrHypertension: req.body.hasHeartDiseaseOrHypertension,
            medicationsAffectImmuneSystem: req.body.medicationsAffectImmuneSystem,
            smokingHistory: req.body.smokingHistory,

            subjectiveSymptomsResponse: []
        }
    )

    await newUser.save()
    .then(
        (newDocument) =>
        {
            console.log("Added new user of username " + newDocument.username);
            res.status(200);
            res.json(
                {
                    success : true
                }
            );
        }
    )
    .catch(
        (err) =>
        {
            console.error("Add_User encountered an error: " + err.toString());
            
            res.status(500); // 500 for DB error
            res.json(
                {
                    success : false,
                    error : "Db error."
                }
            );
            
            success = false;
        }
    );

    return next(success);
}