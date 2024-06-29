const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Connect to MongoDB
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB..!");
  } catch (error) {
    console.log("Connection Faild with DB..!");
    console.log(error);
  }
};

module.exports = connectToDB;
