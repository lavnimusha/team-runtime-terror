const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

// @route POST /profiles
// @desc Given parameters passed in create a profile
// @access Private

exports.createProfile = asyncHandler(async (req, res, next) => {});

// @route GET /profiles
// @desc Search for profiles with query id
// @access Private

exports.searchProfiles = asyncHandler(async (req, res, next) => {
  const profile_email = req.params.email;

  let profile;
  if (profile_email) {
    profile = await Profile.find({
      email: profile_email,
    });
  }

  if (!profile) {
    res.status(404);
    throw new Error("No profiles found in search");
  }

  const [result] = profile;
  res.status(200).json(result);
});

// @route GET /profiles
// @desc Get a list of profiles
// @access Private

exports.listAllProfiles = asyncHandler(async (req, res, next) => {
  const profiles = await Profile.find({});

  if (!profiles) {
    res.status(404);
    throw new Error("No profiles found in search");
  }

  res.status(200).json({ profiles: profiles });
});

// @route POST /profiles
// @desc Update profile for given id
// @access Private

exports.updateProfile = asyncHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    description,
    email,
    gender,
    phoneNumber,
    birthDate,
    address /*TODO  PLAN TO ADD AVAILABILITY IN ANOTHER MODEL*/,
    /* availability: { startDate, endDate, daysOfWeek }, */
  } = req.body;

  await Profile.updateOne(
    { email: req.body.email },
    {
      firstName,
      lastName,
      description,
      email,
      gender,
      phoneNumber,
      address,
      birthDate /*TODO */,
      /* availability: {
        startDate,
        endDate,
        daysOfWeek,
    }, */
    },
    function (err) {
      if (err) {
        res.status(500).send("Internal Server Error!");
      }
      res.status(200).send("Profile updated successfully");
    }
  );
});
