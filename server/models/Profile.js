const mongoose = require("mongoose");

const Schema  = mongoose.Schema;
const profileSchema =  new Schema({ 
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },   
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: Date
    }
});

module.exports = Profile = mongoose.model("profile", profileSchema);
