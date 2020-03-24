/*
    BinaryQuestion.js

    Represents a binary, yes-no medical question.
*/


const mongoose = require('mongoose');

let binaryQuestionSchema = new mongoose.Schema(
    {
        question: String,
        answer: Boolean
    },
    {
        timestamps: true
    }
);
let binaryQuestionModel = mongoose.model("BinaryQuestion", binaryQuestionSchema);

module.exports = binaryQuestionModel;