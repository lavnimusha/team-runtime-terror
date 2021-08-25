const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");

const { getAllConversations } = require("../controllers/conversation");
const { getAllMessagesForConvo } = require("../controllers/conversation");

router.route("/get-all-conversations").get(protect, getAllConversations);
router
  .route("/get-all-messages-for-convo/:convoId")
  .get(protect, getAllMessagesForConvo);

module.exports = router;
