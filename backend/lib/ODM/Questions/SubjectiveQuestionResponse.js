/*
    SubjectiveQuestionResponse.js

    Represents a question with a YES / NO response, and allows
    additional data to be stored if a YES response is recorded.
*/

const mongoose = require('mongoose');

let subjectiveQuestionSchema = new mongoose.Schema(
    {
        
        questionLabel: String,
        response: {
            type: Boolean,
            default: false
        },
        sinceDate: Date,

        detailedResponse: [Number]

    },
    {
        timestamps: true
    }
);
let subjectiveQuestionModel = mongoose.model("SubjectiveQuestion", subjectiveQuestionSchema);

module.exports = subjectiveQuestionModel;