/** @format */
require("dotenv").config();
const nodemailer = require("nodemailer");

const generateOTP = () => {
  let otp = "";
  for (let i = 0; i <= 3; i++) {
    const randomValue = Math.round(Math.random() * 9);
    otp = otp + randomValue;
  }
  return otp;
};

const mailTransport = () =>
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "oladips200@gmail.com",
      pass: "zsoueyxhzbuudssi",
    },
  });

module.exports = { generateOTP, mailTransport };
