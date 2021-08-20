const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

// @route POST /profiles
// @desc Given parameters passed in create a profile
// @access Private

exports.createProfile = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const new_obj = Object.assign(
    {
      availability: {
        startDate: "2012-04-23T18:25:43.511Z",
        endDate: "2012-04-23T18:25:43.511Z",
        daysOfWeek: ["Saturday", "Monday"],
      },
    },
    req.body
  );
  console.log(new_obj);
  const {
    firstName,
    lastName,
    description,
    email,
    phoneNumber,
    availability: { startDate, endDate, daysOfWeek },
  } = new_obj;

  const profile = await Profile.create({
    firstName,
    lastName,
    description,
    email,
    phoneNumber,
    availability: {
      startDate,
      endDate,
      daysOfWeek,
    },
  });

  if (profile) {
    const token = generateToken(profile._id);
    const secondsInWeek = 604800;

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: secondsInWeek * 1000,
    });

    res.status(201).json({
      success: {
        user: {
          id: profile._id,
          ffirstName: profile.firstName,
          lastName: profile.lastName,
          description: profile.description,
          email: profile.email,
          phoneNumber: profile.phoneNumber,
          availability: {
            startDate: profile.availability.startDate,
            endDate: profile.availability.endDate,
            daysOfWeek: [],
          },
        },
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @route GET /profiles
// @desc Search for profiles with query id
// @access Private

exports.searchProfiles = asyncHandler(async (req, res, next) => {
  const profile_id = req.query._id;

  let profiles;
  if (profile_id) {
    profiles = await Profile.find({
      _id: profile_id,
    });
  }

  if (!profiles) {
    res.status(404);
    throw new Error("No profiles found in search");
  }

  res.status(200).json({ profiles: profiles });
});

// @route GET /profiles
// @desc Get a list of profiles
// @access Private

exports.listAllProfiles = asyncHandler(async (req, res, next) => {
  let profiles;

  profiles = await Profile.find({});

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
  const { firstName, lastName, description, email, phoneNumber } = req.query;
  const profile_id = req.query._id;

  const profile = Profile.findOne({ _id: profile_id }, function (err) {
    if (err) {
      res.status(404).send("Request not found!!");
    }
  });

  if (profile) {
    await Profile.updateMany(
      { _id: profile_id },
      {
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        description: req.query.description,
        email: req.query.email,
        phoneNumber: req.query.phoneNumber,
      },
      function (err) {
        if (err) {
          res.status(501).send("Internal Server Error!");
        }

        res.status(200).send("Request updated successfully");
      }
    );
  }
});
