/** @format */
const Withdrawal = require("../models/withdrawalRecieptModel");
const asyncHandler = require("express-async-handler");

// ? create a withdrawal
const createWithdrawal = asyncHandler(async (req, res) => {
  const { withdrawalReceipt, status, owner, ownerWallet } = req.body;
  const withdrawal = await Withdrawal.create({
    withdrawalReceipt,
    status,
    owner,
    ownerWallet,
  });
  if (withdrawal) {
    res.json(withdrawal);
  }
});

// ? get all withdrawals
const getWithdrawals = asyncHandler(async (req, res) => {
  const withdrawals = await Withdrawal.find().populate(
    "withdrawalReceipt owner"
  );
  if (withdrawals) {
    res.json(withdrawals);
  }
});

// ? get my withdrawal
const getMyWithdrawals = asyncHandler(async (req, res) => {
  const withdrawals = await Withdrawal.find({
    owner: { $eq: req.params.id },
  }).populate("owner plan");
  if (withdrawals) {
    res.json(withdrawals);
  }
});

// ? update withdrawal status
const updateWithdrawal = asyncHandler(async (req, res) => {
  const withdrawalToUpdate = await Withdrawal.findById(req.params.id);
  if (withdrawalToUpdate) {
    withdrawalToUpdate.status = "Payment Sent";
  }
  await withdrawalToUpdate.save();
  res.send(withdrawalToUpdate);
});

module.exports = {
  createWithdrawal,
  getWithdrawals,
  updateWithdrawal,
  getMyWithdrawals,
};
