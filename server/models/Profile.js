const mongoose = require("mongoose");

const Schema  = mongoose.Schema;
 const ProfileSchema =  new Schema({ 
    firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },   
      startdate: {
          type: Date,
          default: Date.now
      },
      enddate: {
          type: Date,
          default: Date
      }
      });
      
 module.exports =  Profile = mongoose.model('profile', ProfileSchema); 