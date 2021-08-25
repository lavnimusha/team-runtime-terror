const Message = require("../models/Message");
const Conversation = require("../models/Conversation");
const asyncHandler = require("express-async-handler");

exports.sendMessage = asyncHandler(async (req, res, next) => {
  const { recipientId, conversationId, messageText } = req.body;
  const senderId = req.user.id;

  if (conversationId) {
    Conversation.findOne({ _id: conversationId }, async function (err) {
      if (err) {
        return res.status(404).send("Conversation not found");
      } else {
        const message = await Message.create({
          conversationId,
          messageText,
        });

        res.json({
          status: true,
          status_code: 200,
          data: message,
          message: "Message sent successfully",
        });
      }
    });
  } else {
    const conversation = await Conversation.create({
      recipientId,
      senderId,
    });

    const convoId = conversation._id;

    const message = await Message.create({
      conversationId: convoId,
      messageText,
    });

    res.json({
      status: true,
      status_code: 200,
      data: message,
      message: "Message sent successfully",
    });
  }
});
