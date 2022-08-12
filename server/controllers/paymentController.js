/** @format */
const asyncHandler = require("express-async-handler");
const PaymentReciept = require("../models/PaymenRecieptModel");

// ? create a payment
const createPayment = asyncHandler(async (req, res) => {
  const { plan, status,owner, amount, transactionId, ownerWallet } = req.body;
  const payment = await PaymentReciept.create({
    plan,
    status,
    owner,
    amount,
    transactionId,
    ownerWallet,
  });
  if (payment) {
    res.send(payment);
  }
});

// ? get all payments
const getAllPayments = asyncHandler(async (req, res) => {
  const payments = await PaymentReciept.find().populate("owner plan");
  if (payments) {
    res.json(payments);
  }
});

// ? get users payment
const getUserPayments = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const payments = await PaymentReciept.find({
    owner: { $eq: req.params.id },
  }).populate("owner plan");
  if (payments) {
    res.json(payments);
  }
});

// ? update or verify payment
const verifyPayment = asyncHandler(async (req, res) => {
  const paymentToUpdate = await PaymentReciept.findById(req.params.id);
  if (paymentToUpdate) {
    (paymentToUpdate.status = "verified"), await paymentToUpdate.save();
  }
  res.send(paymentToUpdate);
});

// ? rejecting payment
const rejectPayment = asyncHandler(async (req, res) => {
  const paymentToUpdate = await PaymentReciept.findById(req.params.id);
  if (paymentToUpdate) {
    (paymentToUpdate.status = "rejected"), await paymentToUpdate.save();
  }
  res.send(paymentToUpdate);
});

module.exports = {
  getAllPayments,
  createPayment,
  verifyPayment,
  rejectPayment,
  getUserPayments,
};
