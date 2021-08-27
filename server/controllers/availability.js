const Availability = require("../models/Availability");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
console.log("in controller");

exports.updateA = asyncHandler(async (req, res, next) => {
  const {
    email,
    availability: { startDate, endDate, rate, daysOfWeek },
  } = {
    email: "newuser@yhoo.com",
    availability: {
      startDate: "2021-08-21T16:00:15.142+00:00",
      endDate: "2021-05-08",
      rate: 20,
      daysOfWeek: ["monday", "saturday"],
    },
  };

  await Availability.updateOne(
    { email },
    {
      email,
      availability: {
        startDate,
        endDate,
        rate,
        daysOfWeek,
      },
    },
    { upsert: true },
    function (err) {
      if (err) {
        res.status(500).send("Internal Server Error!");
      }
      res.status(200).send("Availability updated successfully");
    }
  );
});

exports.fetchAvailability = asyncHandler(async (req, res, next) => {
  const email_id = req.params.email;

  const availabilityData = await Availability.findOne(
    { email: email_id },
    function (err) {
      if (err) {
        res.status(404).send("User not found!!");
      }
    }
  );

  if (availabilityData) {
    res.status(200).json(availabilityData);
  }
});
