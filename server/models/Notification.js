const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  isRead: {
    type: Boolean,
    required: true,
    default: false,
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  recipientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
},
{
  timestamps: true
});

module.exports = Notification = mongoose.model(
  "notification",
  notificationSchema
);
