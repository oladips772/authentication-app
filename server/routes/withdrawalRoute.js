/** @format */
const {
  createWithdrawal,
  getWithdrawals,
  updateWithdrawal,
  getMyWithdrawals,
} = require("../controllers/withdrawalController");

const withdrawalRouter = require("express").Router();

// ? creating withdrawal route;
withdrawalRouter.post("/create", createWithdrawal);
withdrawalRouter.get("/", getWithdrawals);
withdrawalRouter.get("/user-withdrawals/:id", getMyWithdrawals);
withdrawalRouter.put("/update/:id", updateWithdrawal);

module.exports = withdrawalRouter;
