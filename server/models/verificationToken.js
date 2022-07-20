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
    const hash = await bcrypt.hash(this.token, 10);
    this.token = hash;
  }
  next();
});

VerificationTokenSchema.methods.compareToken = async function (token) {
  const result = await bcrypt.compareSync(token, this.token);
  return result;
};

const VerificationToken = mongoose.model(
  "VerificationToken",
  VerificationTokenSchema
);
module.exports = VerificationToken;
