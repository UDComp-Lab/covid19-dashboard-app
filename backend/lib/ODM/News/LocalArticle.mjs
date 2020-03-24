/*
    LocalArticle.mjs
*/

import mongoose from 'mongoose';

let localArticleSchema = new mongoose.Schema(
    {
        
    },
    {
        timestamps: true
    }
);
let localArticleModel= mongoose.model("LocalArticle", localArticleSchema);

export default localArticleModel;