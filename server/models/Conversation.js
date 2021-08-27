const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conversationSchema = new mongoose.Schema({
  user1Id: {
    type: [{ type: Schema.Types.ObjectId, ref: "User" }],
    required: true,
  },
  user2Id: {
    type: [{ type: Schema.Types.ObjectId, ref: "User" }],
    required: true,
  },
});

module.exports = Conversation = mongoose.model(
  "conversation",
  conversationSchema
);
