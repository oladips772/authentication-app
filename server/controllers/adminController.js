/** @format */
const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken");

function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "20d",
  });
}

// ? register admin
const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const admin = await Admin.create({ name, email, password });
  if (admin) {
    res.json(admin);
  }
});

// ? login admin
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send("email and password are required");
  }

  const admin = await Admin.findOne({ email });
  if (admin && (await admin.comparePassword(password))) {
    res.json({
      name: admin.name,
      email: admin.email,
      _id: admin._id,
      token: generateToken(admin._id),
    });
  } else {
    res.status(401).send("wrong email or password");
    // throw new Error("wrong email or password");
  }
});

// ? admin update password
const updatePassword = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (admin) {
    admin.password = password || admin.password;
    await admin.save();
  } else {
    res.status(401).send("email not found");
  }
  res.json(admin);
});

// ? update admin profile;
const updateProfile = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (admin) {
    admin.email = email || admin.email;
    admin.password = password || admin.password;
  }
  await admin.save();
  res.json(admin);
});

module.exports = { registerAdmin, loginAdmin, updatePassword, updateProfile };
