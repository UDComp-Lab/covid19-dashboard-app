import mongoose from 'mongoose';

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
let userModel = mongoose.model("LocalSource", localSourceSchema);

export default userModel;