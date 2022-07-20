/** @format */
const { isValidObjectId } = require("mongoose");
const asyncHandler = require("../middlewares/asyncHandler");
const ResetToken = require("../models/resetToken");

const isResetTokenValid = asyncHandler(async (req, res, next) => {
  const { token, id } = req.query;
  const resetToken = await ResetToken.findOne({ token });
  if (!resetToken) {
    res.status(400);
    throw new Error("invalid token");
  }
  if (!isValidObjectId(id)) {
    res.status(400);
    throw new Error("invalid id");
  }
  if (resetToken.isExpired()) {
    res.status(400);
    throw new Error("token expired");
  }
  next();
});

module.exports = isResetTokenValid;
