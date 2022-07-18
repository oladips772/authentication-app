/** @format */
const userRouter = require("express").Router();
const {
  registerUser,
  loginUser,
  verifyEmail,
  resetPassword,
} = require("../controllers/userController");
const { validateUser, validate } = require("../middlewares/validator");

// ? registering user
userRouter.post("/register", validateUser, validate, registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/verifyaccount", verifyEmail);
userRouter.post("/resetpassword", resetPassword);

module.exports = userRouter;
