const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
    },
    sitter_id: {
        type: Number,
        required: true,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
})

module.exports = Request = mongoose.model("request", requestSchema);