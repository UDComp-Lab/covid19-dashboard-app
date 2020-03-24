/*
    LocalSource.mjs

    Represents a news source that is local to a region.
*/


const mongoose = require('mongoose');
const Geolocation = require('./Geolocation');
const LocalArticle = require('./LocalArticle');

let localSourceSchema = new mongoose.Schema(
    {
        name : String,
        location : Geolocation.schema,
        articles : [LocalArticle]
    },
    {
        timestamps: true
    }
);
let localSourceModel = mongoose.model("LocalSource", localSourceSchema);

module.exports = localSourceModel;