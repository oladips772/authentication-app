/** @format */
const userRouter = require("express").Router();
const User = require("../models/userSchema");
const asyncHandler = require("express-async-handler");

// ? registering user
userRouter.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    if (user) {
      res.send(user);
    }
  })
);

module.exports = userRouter;
