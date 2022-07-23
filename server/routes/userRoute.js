/** @format */
const userRouter = require("express").Router();
const {
  registerUser,
  loginUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
  getAllUsers,
} = require("../controllers/userController");
const isResetTokenValid = require("../middlewares/userMiddleware");
const { validateUser, validate } = require("../middlewares/validator");
const asyncHandler = require("express-async-handler")

// ? registering user
userRouter.post("/register", validateUser, validate, registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/", getAllUsers);
userRouter.post("/verify-account", verifyEmail);
userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/reset-password", isResetTokenValid, resetPassword);
userRouter.post("/verify-token", isResetTokenValid, asyncHandler(async (req, res) => {
  res.send("success true")
}));

module.exports = userRouter;
