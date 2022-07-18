/** @format */
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MONGO_DB Connected...");
  } catch (err) {
    console.error(`Error:${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;