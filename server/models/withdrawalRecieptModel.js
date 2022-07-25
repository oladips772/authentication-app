/** @format */
const mongoose = require("mongoose");

const WithdrawalSchema = mongoose.Schema(
  {
    withdrawalReceipt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PaymentReciept",
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

const Withdrawal = mongoose.model("Withdrawal", WithdrawalSchema);
module.exports = Withdrawal;
