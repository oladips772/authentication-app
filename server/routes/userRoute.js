/** @format */
const userRouter = require("express").Router();
const {
  registerUser,
  loginUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");
const isResetTokenValid = require("../middlewares/userMiddleware");
const { validateUser, validate } = require("../middlewares/validator");

// ? registering user
userRouter.post("/register", validateUser, validate, registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/verify-account", verifyEmail);
userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/reset-password", isResetTokenValid, resetPassword);

module.exports = userRouter;
