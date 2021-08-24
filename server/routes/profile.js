const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  searchProfiles,
  createProfile,
  listAllProfiles,
  updateProfile,
  uploadImage,
  manageBooking,
} = require("../controllers/profile");

router.route("/create").post(createProfile);

router.route("/search").get(protect, searchProfiles);

router.route("/list").get(protect, listAllProfiles);

router.route("/update").post(protect, updateProfile);

router.route("/profile-photo").post(uploadImage);

router.route("/manage-booking").post(manageBooking);

module.exports = router;