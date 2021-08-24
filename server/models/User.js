const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const bookingSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
  startTime: {
    type: Date,
    required: true,
    default: new Date().getTime(),
  },
  endTime: {
    type: Date,
    required: true,
    default: new Date().getTime(),
  },
  isUpdated: {
    type: Boolean,
    required: true,
    default: false,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
  booking: {
    type: [],
    required: false,
  },
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = User = mongoose.model("user", userSchema);
