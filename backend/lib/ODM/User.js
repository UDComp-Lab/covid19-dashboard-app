const mongoose = require('mongoose');

let userSchema = new mongoose.Schema(
    {
        username: String,
        birthday: Date,
        sex: {
            type: String,
            enum: ["Male", "Female", "Other"]
        }

    },
    {
        timestamps: true
    }
);
let userModel = mongoose.model("User", userSchema);

module.exports = userModel;