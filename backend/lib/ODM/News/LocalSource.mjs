/*
    LocalSource.mjs

    Represents a news source that is local to a region.
*/


import mongoose from 'mongoose';

let localSourceSchema = new mongoose.Schema(
    {
        
    },
    {
        timestamps: true
    }
);
let localSourceModel = mongoose.model("LocalSource", localSourceSchema);

export default localSourceModel;