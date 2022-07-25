/** @format */
const { registerAdmin, loginAdmin, updatePassword, updateProfile } = require("../controllers/adminController");

const adminRouter = require("express").Router();

// ? creating admin account
adminRouter.post("/register", registerAdmin);
adminRouter.post("/login", loginAdmin);
adminRouter.post("/update-password", updatePassword);
adminRouter.post("/update-profile", updateProfile);

module.exports = adminRouter;
