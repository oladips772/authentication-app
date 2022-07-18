/** @format */
const userRouter = require("express").Router();
const { registerUser, loginUser } = require("../controllers/userController");
const { validateUser, validate } = require("../middlewares/validator");

// ? registering user
userRouter.post("/register", validateUser, validate, registerUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
