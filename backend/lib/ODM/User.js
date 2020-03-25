const mongoose = require('mongoose');

const CovidQuestionResponse = require('./Questions/CovidQuestionResponse');
const SubjectiveQuestionResponse = require('./Questions/SubjectiveQuestionResponse');

let userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        
        // Demographics
        birthYear: {
            type: Number,
            required: true,
            min: 1900,
            max: (new Date()).getUTCFullYear()
        },
        bioSex: {
            type: String,
            enum: ["Male", "Female"],
            required: true
        },
        ethnicity: {
            type: String,
            enum: [
                "White",
                "African American",
                "Asian",
                "American Indian or Alaskan Native",
                "Native Hawaiian or other Pacific Islander"
            ],
            required: true
        },
        occupation: {
            type: String,
            enum: [
                "Healthcare",
                "Tourism",
                "Retail",
                "Hospitality",
                "Food Service",
                "Transportation",
                "Security",
                "Law Enforcement",
                "Sanitation",
                "Education",
                "Other"
            ]
        },

        // Medical History
        historyWithCancer: {
            type: Boolean,
            default: false
        },
        hasDiabetes: {
            type: Boolean,
            default: false
        },
        hasHeartDiseaseOrHypertension: {
            type: Boolean,
            default: false
        },
        medicationsAffectImmuneSystem: {
            type: Boolean,
            default: false
        },
        smokingHistory: {
            type: Boolean,
            default: false
        },

        // COVID Question response
        hasCovidResponse: {
            type: CovidQuestionResponse,
            required: false
        },

        // Subjective symptoms
        subjectiveSymptomsResponse: {
            type: [SubjectiveQuestionResponse],
            default: []
        }

    },
    {
        timestamps: true
    }
);
let userModel = mongoose.model("User", userSchema);


module.exports = userModel;