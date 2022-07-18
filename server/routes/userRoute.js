/** @format */
const userRouter = require("express").Router();
const { registerUser } = require("../controllers/userController");
const { validateUser, validate } = require("../middlewares/validator");

// ? registering user
userRouter.post("/register", validateUser, validate, registerUser);

module.exports = userRouter;
