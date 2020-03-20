/*
    Submission.mjs
*/


import mongoose from 'mongoose';

let submissionSchema = new mongoose.Schema(
    {
        
    },
    {
        timestamps: true
    }
);
let submissionModel = mongoose.model("Submission", submissionSchema);

export default submissionModel;