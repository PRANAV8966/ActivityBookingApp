import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({

    title: {
        type: String,
        required:true
    },
    description: {
        type:String,
        required: true
    },
    location: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: String, required: true }
    },
    dateTime: {
        type: Date,
        required: true
    }
},{timestamps:true});

const Activity = mongoose.model('Activity', activitySchema);

export {
    Activity
}