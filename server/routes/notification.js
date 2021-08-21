const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");

const {
  getAllNotification,
  getNotification,
  createNotification,
  markNotification,
} = require("../controllers/notification");

router.route("/").get(protect, createNotification);
router.route("/").get(protect, markNotification);
router.route("/").post(protect, getNotification);
router.route("/").post(protect, getAllNotification);

module.exports = router;
