const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const availabilitySchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  availability: new Schema({
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
      default: Date,
    },
    rate: {
      type: Number,
    },
    daysOfWeek: [{ type: String }],
  }),
});

module.exports = Availability = mongoose.model(
  "availability",
  availabilitySchema
);
