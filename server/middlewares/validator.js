/** @format */
const { check, validationResult } = require("express-validator");

const validateUser = [
  check("name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("name is required")
    .isLength({ min: 3, max: 20 })
    .withMessage("name must be between 3 and 20 characters"),
  check("email").normalizeEmail().isEmail().withMessage("invalid email"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("password is required")
    .isLength({ min: 8, max: 20 })
    .withMessage("password must be 8 to 20 characters long"),
];

const validate = (req, res, next) => {
  const error = validationResult(req).array();
  if (!error.length) return next();
  res.status(400).json({ success: false, error: error[0].msg });
};

module.exports = { validateUser, validate };
