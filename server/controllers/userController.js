/** @format */
const User = require("../models/userSchema");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password });
  if (user) {
    res.send(user);
  }
});

module.exports = { registerUser };
