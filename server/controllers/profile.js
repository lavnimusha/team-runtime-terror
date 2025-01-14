const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const multer = require("multer");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");
const fs = require("fs");
const path = require("path");

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.BUCKET_REGION,
});

const s3 = new AWS.S3();
const uploadS3 = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "teamruntimeterror",
    metadata: (req, file, cb) => {
      cb(null, { fieldname: file.fieldname });
    },
    key: (req, file, cb) => {
      console.log(path.extname(file.originalname));
      cb(null, new Date().toISOString() + "-" + file.originalname);
    },
  }),
});

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

exports.uploadImage =
  (uploadS3.single("file"),
  async (req, res) => {
    if (req.files.file === null) {
      return res.status(400).json({ msg: "no file is uploaded" });
    }

    const uploadedFile = req.files.file;

    const file = req.files.file;

    file.mv(`${__dirname}/${file.name}`, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      console.log("image moved to server");
    });

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(500);

    try {
      const params = {
        Bucket: "teamruntimeterror",
        Key: uploadedFile.name,

        Body: fs.createReadStream(`${__dirname}/${uploadedFile.name}`),
      };
      s3.upload(params, (err, data) => {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        }
        console.log(`File uploaded successfully. ${data.Location}`);
        fs.unlink(`${__dirname}/${uploadedFile.name}`, (err) => {
          if (err) {
            console.log(err);
          }
          console.log("successfully deleted from server");
        });
        res.json({
          fileName: uploadedFile.name,
          filePath: data.Location,
        });
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  });
