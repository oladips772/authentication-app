/** @format */
const {
  getAllPayments,
  createPayment,
  verifyPayment,
  rejectPayment,
} = require("../controllers/paymentController");

const paymentRouter = require("express").Router();

paymentRouter.get("/get-payments", getAllPayments);
paymentRouter.post("/create-payment", createPayment);
paymentRouter.put("/verify-payment/:id", verifyPayment);
paymentRouter.put("/reject-payment/:id", rejectPayment);
module.exports = paymentRouter;
