/** @format */
const User = require("../models/userSchema");
const VerificationToken = require("../models/verificationToken");
const ResetToken = require("../models/resetToken");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const {
  generateOTP,
  mailTransport,
  generateReferal,
} = require("../utils/mail");
const createRandomBytes = require("../utils/helper");
const OTP = generateOTP();
const refCode = generateReferal();

function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
}

// ? getting all users
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

// ? registering a new user;
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, referalCode } = req.body;

  // ? checking if a user exists
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(404);
    throw new Error("user with email already exist");
  }

  // ? verfiying referalCode
  const refUser = await User.findOne({ referalCode });
  if (refUser) {
    refUser.referals = refUser.referals + 1;
    await refUser.save();
    res.json(refUser);
  }

  const user = await User.create({
    name,
    email,
    password,
    referalCode: refCode,
  });

  const veriToken = await VerificationToken.create({
    owner: user._id,
    token: OTP,
  });

  mailTransport().sendMail({
    from: "emailverification@email.com",
    to: user.email,
    subject: "verify your email",
    html: `<h1> use this token ${OTP} to verify your email address</h1>`,
  });

  res.json(user);
});

// ? login a user
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
        _id: user._id,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("wrong email or password");
    }
  }
});

// ? verifyign a user's email
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
    await user.save();
    await VerificationToken.findByIdAndDelete(token._id);
    mailTransport().sendMail({
      from: "emailverification@email.com",
      to: user.email,
      subject: "verify your email",
      html: `account verified succesfully`,
    });
    res.json(user);
  } else {
    res.send("wrong otp");
  }
});

// ? forgot password function
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
          html: `<h1>reset your  password ny following this link</h1>
          <a href="http://localhost:3000/reset-password?token=${newToken}&id=${user._id}">Reset Password</a>
          `,
        });
        res.send("password reset link sent to your email");
      }
    } else {
      res.send("no user found");
    }
  }
});

// ? reset password function
const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const user = await User.findById(req.user._id);
  const isSamePassword = await user.comparePassword(password);
  if (isSamePassword) {
    res.status(400);
    throw new Error("new password can not be same as old password");
  }

  if (password.length < 8) {
    res.status(400);
    throw new Error("password must be atleast 8 characters");
  }

  user.password = password;
  await user.save();
  await ResetToken.findOneAndDelete({ owner: user._id });

  mailTransport().sendMail({
    from: "emailverification@email.com",
    to: user.email,
    subject: "password reset link request",
    html: `<h1>password changed succesfully</h1>`,
  });

  res.send("password changed succesfully");
});

module.exports = {
  registerUser,
  loginUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
  getAllUsers,
};
