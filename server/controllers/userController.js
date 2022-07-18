/** @format */
const User = require("../models/userSchema");
const VerificationToken = require("../models/verificationToken");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { generateOTP, mailTransport } = require("../utils/mail");

function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "20d",
  });
}

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(404);
    throw new Error("user with email already exist");
  }

  const user = await User.create({ name, email, password });
  if (user) {
    res.send(user);
  }
  const veriToken = await VerificationToken.create({
    owner: user._id,
    token: generateOTP(),
  });
  res.send(veriToken);

  mailTransport().sendMail({
    from: "emailverification@email.com",
    to: user.email,
    subject: "verify your email",
    html: `<h1>${generateOTP()}</h1>`,
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(404);
    throw new Error("password and email are require");
  } else {
    const user = await User.findOne({ email });

    if (user && (await user.comparePassword(password))) {
      res.json({
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        _id: user._id,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("wrong email or password");
    }
  }
});

module.exports = { registerUser, loginUser };
