/*
    ContactInfoResponse.js

    Represents a response to a question asking for
    contact info.
*/

const mongoose = require('mongoose');

let contactInfoResponseSchema = new mongoose.Schema(
    {
        contactName : String,
        contactEmail : String, // TODO Validate
        contactPhone: String
    },
    {
        timestamps: true
    }
);
let contactInfoResponseModel = mongoose.model("ContactInfoResponse", contactInfoResponseSchema);

module.exports = contactInfoResponseModel;