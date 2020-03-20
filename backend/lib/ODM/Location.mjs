/*
    Location.mjs
*/

import mongoose from 'mongoose';
import InfectedDateTimePair from './InfectedDateTimePair.mjs';

let locationSchema = new mongoose.Schema(
    {
        provinceName: String, // States or Provinces
        regionName: String,    // Region or Country

        latitude: Number,
        longitude: Number,

        virusHistory: [InfectedDateTimePair.schema]
    },
    {
        timestamps: true
    }
);
let locationModel = mongoose.model("Location", locationSchema);


export default locationModel;
