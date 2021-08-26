const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  searchProfiles,
  createProfile,
  listAllProfiles,
  updateProfile,
} = require("../controllers/profile");
console.log("hey you there");
router.route("/create").post(createProfile);

router.route("/search/:email").get(protect, searchProfiles);

router.route("/list").get(protect, listAllProfiles);

router.route("/update").post(protect, updateProfile);

module.exports = router;
