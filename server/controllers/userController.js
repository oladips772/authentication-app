/** @format */
const User = require("../models/userSchema");
const VerificationToken = require("../models/verificationToken");
const ResetToken = require("../models/resetToken");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { generateOTP, mailTransport } = require("../utils/mail");
const { isValidObjectId } = require("mongoose");
const crypto = require("crypto");

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
  mailTransport().sendMail({
    from: "emailverification@email.com",
    to: user.email,
    subject: "verify your email",
    html: `<h1>${generateOTP()}</h1>`,
  });
  if (user) {
    res.send(user);
  }
  const veriToken = await VerificationToken.create({
    owner: user._id,
    token: generateOTP(),
  });
  res.send(veriToken);
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

const verifyEmail = asyncHandler(async (req, res) => {
  const { userId, otp } = req.body;
  if (!userId || !otp.trim()) {
    res.status(400);
    throw new Error("otp and user id are required");
  } else {
    if (isValidObjectId(userId)) {
      const user = await User.findById(userId);
      if (user.isVerified) {
        res.status(400);
        throw new Error("account verified already");
      }
      if (user) {
        const token = await VerificationToken.findOne({
          owner: userId,
        });
        if (token.comparePassword(otp)) {
          user.isVerified = true;
          await VerificationToken.findByIdAndDelete(token._id);
          user.save();
          mailTransport().sendMail({
            from: "emailverification@email.com",
            to: user.email,
            subject: "email verification succesfull",
            html: `<h1>email verified succesfully</h1>`,
          });
          res.send(user);
        } else {
          res.status(400);
          throw new Error("wrong otp");
        }
      }
    }
  }
});

const resetPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400);
    throw new Error("email is required");
  } else {
    const user = await User.findOne({ email });
    if (user) {
      const token = await ResetToken.findOne({ owner: user._id });
      if (token) {
        res.status(400);
        throw new Error("reset password link can be resent after 1 hour");
      } else {
       
      }
    }
  }
});

module.exports = { registerUser, loginUser, verifyEmail, resetPassword };
