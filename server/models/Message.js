const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = mongoose.Schema({
  conversationId: {
    type: [{ type: Schema.Types.ObjectId, ref: "Conversation" }],
    required: true,
  },
  messageText: {
    type: String,
    required: true,
  },
  messageStatus: {
    type: Boolean,
    default: false,
    required: true,
  },
});

module.exports = Message = mongoose.model("message", messageSchema);
