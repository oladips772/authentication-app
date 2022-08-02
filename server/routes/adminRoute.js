/** @format */
const expressAsyncHandler = require("express-async-handler");
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
const Admin = require("../models/adminModel")

// ? creating admin account
adminRouter.get("/", getAdmins);
adminRouter.post("/register", registerAdmin);
adminRouter.post("/login", loginAdmin);
adminRouter.put("/update-password", updatePassword);
adminRouter.put("/update-profile", updateProfile);
// ? admin delete
adminRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (admin) {
      res.json({ msg: `entrepreneur deleted ${req.params.id}` });
    } else {
      throw new Error("entrepreneur not found");
    }
  })
);

module.exports = adminRouter;
