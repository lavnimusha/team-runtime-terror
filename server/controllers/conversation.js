const Message = require("../models/Message");
const Conversation = require("../models/Conversation");
const asyncHandler = require("express-async-handler");

exports.getAllConversations = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  /*
        looking for fix to make this query aggregate so that I can implement
        a left join on the messages collection, will be resolving in upcoming commits
    */
  await Conversation.find(
    {
      $or: [{ senderId: userId }, { recipientId: userId }],
    },
    (err, conversations) => {
      res.json({
        status: true,
        status_code: 200,
        conversations: conversations,
        message: "Conversations fetched successfully",
      });
    }
  );
});

exports.getAllMessagesForConvo = asyncHandler(async (req, res, next) => {
  const conversationId = req.params.convoId;

  await Message.find({ conversationId: conversationId }).exec(
    (err, messages) => {
      if (err) {
        res.status(500).send("Something went wrong");
      } else {
        res.json({
          status: true,
          status_code: 200,
          conversations: messages,
          message: "Messages fetched successfully",
        });
      }
    }
  );
});
