/** @format */
const {
  registerAdmin,
  loginAdmin,
  updatePassword,
  updateProfile,
  getAdmins,
  deleteAdmin,
} = require("../controllers/adminController");
const protect = require("../middlewares/authMiddleware");
const adminRouter = require("express").Router();

// ? creating admin account
adminRouter.get("/", getAdmins);
adminRouter.delete("/:id", deleteAdmin);
adminRouter.post("/register", registerAdmin);
adminRouter.post("/login", loginAdmin);
adminRouter.put("/update-password", updatePassword);
adminRouter.put("/update-profile", updateProfile);

module.exports = adminRouter;
