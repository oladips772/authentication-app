/** @format */
const userRouter = require("express").Router();
const {
  registerUser,
  loginUser,
  verifyEmail,
  forgotPassword,
} = require("../controllers/userController");
const { validateUser, validate } = require("../middlewares/validator");

// ? registering user
userRouter.post("/register", validateUser, validate, registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/verify-account", verifyEmail);
userRouter.post("/forgot-password", forgotPassword);

module.exports = userRouter;
