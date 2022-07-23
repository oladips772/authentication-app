const { getAllPayments } = require("../controllers/paymentController");

const paymentRouter = require("express").Router();

paymentRouter.get("/get-payments",getAllPayments)
module.exports = paymentRouter;