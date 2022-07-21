/** @format */
const { isValidObjectId } = require("mongoose");
const asyncHandler = require("express-async-handler");
const ResetToken = require("../models/resetToken");
const User = require("../models/userSchema");

const isResetTokenValid = asyncHandler(async (req, res, next) => {
  const { token, id } = req.query;

  if (!token || !id) {
    res.status(400);
    throw new Error("invalid token or id");
  }
  if (!isValidObjectId(id)) {
    res.status(400);
    throw new Error("invalid id");
  }

  const user = await User.findById(id);
  if (!user) {
    res.status(400);
    throw new Error("user not found");
  }
  const resetToken = await ResetToken.findOne({ owner: user._id });
  if (!resetToken) {
    res.status(400);
    throw new Error("token not found");
  }
  const isvalid = await resetToken.compareToken(token);
  if (!isvalid) {
    res.status(400);
    throw new Error("token not valid");
  }
  req.user = user;
  next();
});

module.exports = isResetTokenValid;
