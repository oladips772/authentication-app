/** @format */
const User = require("../models/userSchema");
const VerificationToken = require("../models/verificationToken");
const ResetToken = require("../models/resetToken");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { generateOTP, mailTransport } = require("../utils/mail");
const createRandomBytes = require("../utils/helper");
const bcrypt = require("bcryptjs");
const OTP = generateOTP();

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

  const veriToken = await VerificationToken.create({
    owner: user._id,
    token: OTP,
  });

  mailTransport().sendMail({
    from: "emailverification@email.com",
    to: user.email,
    subject: "verify your email",
    html: `<h1>${OTP}</h1>`,
  });

  res.send(user);
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
  const user = await User.findById(userId);

  if (user && user.isVerified) {
    res.status(400);
    throw new Error("user already verified");
  }

  const token = await VerificationToken.findOne({ owner: user._id });
  if (!token) {
    res.status(400);
    throw new Error("user not not found");
  }

  if (token && (await token.compareToken(otp))) {
    user.isVerified = true;
    await user.save()
    await VerificationToken.findByIdAndDelete(token._id);
    mailTransport().sendMail({
      from: "emailverification@email.com",
      to: user.email,
      subject: "verify your email",
      html: `account verified succesfully`,
    });
    res.send(user);
  } else {
    res.send("wrong otp");
  }

});

const forgotPassword = asyncHandler(async (req, res) => {
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
        const newToken = await createRandomBytes();
        const resetToken = await ResetToken.create({
          owner: user._id,
          token: newToken,
        });
        mailTransport().sendMail({
          from: "emailverification@email.com",
          to: user.email,
          subject: "password reset link request",
          html: `<h1>reset your  password ny following this link</h1>`,
        });
        res.send("password reset link sent to your email");
      }
    } else {
      res.send("no user found");
    }
  }
});

const resetPassword = asyncHandler(async (req, res) => {});

module.exports = { registerUser, loginUser, verifyEmail, forgotPassword };
