/*
    CovidQuestionResponse.js

    Represents a response to a question asking if someone
    has tested positive for COVID-19.
*/

const mongoose = require('mongoose');
const ContactInfoResponse = require('./ContactInfoResponse');

let covidQuestionResponseSchema = new mongoose.Schema(
    {
        "response" : {
            type: Boolean,
            required: true
        },
        "contactInfo" : {
            type: [ContactInfoResponse],
            required: false
        }
    },
    {
        timestamps: true
    }
);
let covidQuestionResponseModel = mongoose.model("CovidQuestionResponse", covidQuestionResponseSchema);

module.exports = covidQuestionResponseModel;