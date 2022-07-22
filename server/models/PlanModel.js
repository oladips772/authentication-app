/** @format */
const mongoose = require("mongoose");

const PlanSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    interest: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Plan = mongoose.model("Plan", PlanSchema);
module.exports = Plan;
