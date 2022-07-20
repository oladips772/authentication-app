/** @format */
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MONGO_DB connected");
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

module.exports = connectDB;
