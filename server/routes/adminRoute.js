/** @format */
const { registerAdmin, loginAdmin } = require("../controllers/adminController");

const adminRouter = require("express").Router();

// ? creating admin account
adminRouter.post("/register", registerAdmin);
adminRouter.post("/login", loginAdmin);

module.exports = adminRouter;
