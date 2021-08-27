const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
console.log(router.route);
const { updateA, fetchAvailability } = require("../controllers/availability");

router.route("/update").post(protect, updateA);

router.route("/fetch/:email").get(protect, fetchAvailability);

module.exports = router;
