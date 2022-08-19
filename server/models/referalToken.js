/** @format */
const mongoose = require("mongoose");

const referalTokenSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    referalCode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const referalToken = mongoose.model("referalToken", referalTokenSchema);
module.exports = referalToken;
