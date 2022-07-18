/** @format */
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const ResetTokenSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    generatedAt: {
      type: Date,
      default: Date.now(),
      expires: 3600,
    },
  },
  {
    timestamps: true,
  }
);

ResetTokenSchema.pre("save", async function (next) {
  if (this.isModified("token")) {
    const hash = await bcrypt.hash(this.token, 8);
    this.token = hash;
  }
  next();
});

ResetTokenSchema.methods.comparePassword = async function (token) {
  return await bcrypt.compare(token, this.token);
};

const ResetToken = mongoose.model(
  "ResetToken",
  ResetTokenSchema
);
module.exports = ResetToken;
