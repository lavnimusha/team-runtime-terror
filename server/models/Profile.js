const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const profileSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
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
  availability: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Availability",
  },
  /* availability: new Schema({
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
      default: Date,
    },
    daysOfWeek: [{ type: String }],
  }), */
});

module.exports = Profile = mongoose.model("profile", profileSchema);
