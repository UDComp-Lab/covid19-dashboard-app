/*
    Geolocation.mjs

    Represents a location on planet Earth as geojson.
*/


const mongoose = require('mongoose');

let geolocationSchema = new mongoose.Schema(
    {
        type : { type : String },
        coordinates : [Number]
    },
    {
        timestamps: true
    }
);
let geolocationModel = mongoose.model("Geolocation", geolocationSchema);

module.exports = geolocationModel;