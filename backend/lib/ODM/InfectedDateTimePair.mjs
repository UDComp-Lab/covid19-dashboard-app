/*
    InfectedDateTimePair.mjs
*/

import mongoose from 'mongoose';

let infectedDateTimePairSchema = new mongoose.Schema(
    {
        dateTime: Date,
        infected: Number
    },
    {
        timestamps: false
    }
);
let infectedDateTimePairModel = mongoose.model("InfectedDateTimePair", infectedDateTimePairSchema);

export default infectedDateTimePairModel;