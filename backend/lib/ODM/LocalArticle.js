/*
    LocalArticle.mjs
*/

const mongoose = require('mongoose');

let localArticleSchema = new mongoose.Schema(
    {
        headline : String,
        author : String,
        summary : String,
        link : String
    },
    {
        timestamps: true
    }
);
let localArticleModel = mongoose.model("LocalArticle", localArticleSchema);

module.exports = localArticleModel;