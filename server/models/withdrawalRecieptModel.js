/** @format */
const mongoose = require("mongoose");

const PaymentRecieptSchema = mongoose.Schema(
  {
    plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
      required: true,
    },
    status: {
      type: String,
      default: "pending",
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ownerWallet: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PaymentReciept = mongoose.model("PaymentReciept", PaymentRecieptSchema);
module.exports = PaymentReciept;
