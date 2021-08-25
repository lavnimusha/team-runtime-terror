const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conversationSchema = new mongoose.Schema({
  senderId: {
    type: [{ type: Schema.Types.ObjectId, ref: "User" }],
    required: true,
  },
  recipientId: {
    type: [{ type: Schema.Types.ObjectId, ref: "User" }],
    required: true,
  },
});

module.exports = Conversation = mongoose.model(
  "conversation",
  conversationSchema
);
