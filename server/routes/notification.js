const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");

const {
  getAllNotifications,
  createNotification,
  markNotificationRead,
  getUnreadNotifications
} = require("../controllers/notification");

router.route("/create").post(protect, createNotification);
router.route("/mark/:notification_id").post(protect, markNotificationRead);
router.route("/getAll").get(protect, getAllNotifications);
router.route("/unread").get(protect, getUnreadNotifications);

module.exports = router;
