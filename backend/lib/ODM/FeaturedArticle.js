/*
    FeaturedArticle.mjs
*/


const mongoose = require('mongoose');

let featuredArticleSchema = new mongoose.Schema(
    {
        
    },
    {
        timestamps: true
    }
);
let featuredArticleModel = mongoose.model("FeaturedArticle", featuredArticleSchema);

module.exports = featuredArticleModel;