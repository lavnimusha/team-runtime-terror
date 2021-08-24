const mongoose = require("mongoose");

const Schema  = mongoose.Schema;

const profileSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
    unique: true,
  },
  availability: new Schema({
    startDate: {
      type: Date,
      default: Date.now,
      required: false,
    },
    endDate: {
      type: Date,
      default: Date,
      required: false,
    },
    daysOfWeek: [{ type: String }],
  }),
});

module.exports = Profile = mongoose.model("profile", profileSchema);