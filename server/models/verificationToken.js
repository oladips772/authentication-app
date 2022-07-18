/** @format */
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const VerificationTokenSchema = new mongoose.Schema(
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

VerificationTokenSchema.pre("save", async function (next) {
  if (this.isModified("token")) {
    const hash = await bcrypt.hash(this.token, 8);
    this.token = hash;
  }
  next();
});

VerificationTokenSchema.methods.comparePassword = async function (token) {
  return await bcrypt.compare(token, this.token);
};

const VerificationToken = mongoose.model(
  "VerificationToken",
  VerificationTokenSchema
);
module.exports = VerificationToken;
