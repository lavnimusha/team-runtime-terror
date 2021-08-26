const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  userId: {
    type: [{ type: Schema.Types.ObjectId, ref: "User" }],
    required: true,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  filePath: {
    type: String,
    required: false,
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
