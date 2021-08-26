const mongoose = require("mongoose");

const Schema = mongoose.Schema;
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
  address: {
    type: String,
  },
  gender: {
    type: String,
  },
  birthDate: {
    type: Date,
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
