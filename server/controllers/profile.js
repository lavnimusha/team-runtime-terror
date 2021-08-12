const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");

// @route POST /profiles
// @desc Given parameters passed in create a profile
// @access Private

exports.Profiles = asyncHandler(async (req, res, next) => {
    const { firstname, lastname, description, startdate, enddate } = req.body;
    const profile = await Profile.create({
        firstname,
        lastname,
        description,
        startdate,
        enddate
      });
    
      if (profile) {
        const token = generateToken(profile._id);
        const secondsInWeek = 604800;
    
        res.cookie("token", token, {
          httpOnly: true,
          maxAge: secondsInWeek * 1000
        });
    
        res.status(201).json({
          success: {
            user: {
              id: profile._id,
              firstname: profile.firstname,
              lastname: profile.lastname,
              description: profile.description,
              startdate: profile.startdate,
              enddate: profile.enddate
            }
          }
        });
      } else {
        res.status(400);
        throw new Error("Invalid user data");
      }
})


// @route GET /profiles
// @desc Search for profiles with query id
// @access Private

exports.Profiles = asyncHandler(async (req, res, next) => {
    const profile_id = req.query._id;
  
    let profiles;
    if (profile_id) {
      profiles = await Profile.find({
        _id: profile_id
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

exports.listOfProfiles = asyncHandler(async (req, res, next) => {
    
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

exports.updatePofile = (req, res, next) => {
    let { firstname, lastname, description, startdate, lastdate } = req.body;

    let profile;
    let profile_id = req.query.id;
    
    if (profile_id) {
      profile = await Profile.findOne({
        _id: profile_id
      });
    } 
    // populating only updated fields
    let updatedParams = { firstname: firstname, lastname: lastname, description: description, startdate: startdate, lastdate: lastdate}
        Object.keys(updatedParams).forEach(key => updatedParams[key] === undefined && delete updatedParams[key])

        
    // Override the current user data with updated one
    profile = Object.assign(profile, updatedParams);

    profile.save((err, savedProfile) => {
        if (err) {
            return next(err);
        }
        res.json(savedProfile.toJSON());
    });
};
