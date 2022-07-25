/** @format */
const {
  createWithdrawal,
  getWithdrawals,
  updateWithdrawal,
} = require("../controllers/withdrawalController");

const withdrawalRouter = require("express").Router();

// ? creating withdrawal route;
withdrawalRouter.post("/create", createWithdrawal);
withdrawalRouter.get("/", getWithdrawals);
withdrawalRouter.put("/update/:id", updateWithdrawal);

module.exports = withdrawalRouter;
