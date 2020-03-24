/*
    FeaturedSource.js
*/


const mongoose = require('mongoose');

let featuredSourceSchema = new mongoose.Schema(
    {
        name: String,
        articles: [FeaturedArticle]
    },
    {
        timestamps: true
    }
);
let featuredSourceModel= mongoose.model("FeaturedSource", featuredSourceSchema);

module.exports = featuredSourceModel;