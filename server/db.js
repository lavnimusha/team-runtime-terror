const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};
const Schema  = mongoose.Schema;
const ProfileSchema =  new Schema({ 
		FirstName: String,
		LastName: String,
		Description: String,
		Availability: 	Date

	 });
const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = { connectDB, Profile }; 
