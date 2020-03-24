/*
    FeaturedArticle.mjs
*/


import mongoose from 'mongoose';

let featuredArticleSchema = new mongoose.Schema(
    {
        
    },
    {
        timestamps: true
    }
);
let featuredArticleModel= mongoose.model("FeaturedArticle", featuredArticleSchema);

export default featuredArticleModel;