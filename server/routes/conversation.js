const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");

const { getAllConversations } = require("../controllers/conversation");
const { getAllMessagesForConvo } = require("../controllers/conversation");

router.route("/").get(protect, getAllConversations);
router.route("/:convoId").get(protect, getAllMessagesForConvo);

module.exports = router;
