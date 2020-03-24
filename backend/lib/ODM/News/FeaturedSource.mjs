/*
    FeaturedSource.mjs
*/


import mongoose from 'mongoose';

let featuredSourceSchema = new mongoose.Schema(
    {
        
    },
    {
        timestamps: true
    }
);
let featuredSourceModel= mongoose.model("FeaturedSource", featuredSourceSchema);

export default featuredSourceModel;