/** @format */
const Plan = require("../models/PlanModel");
const asyncHandler = require("express-async-handler");

// ? creating plans
const createPlan = asyncHandler(async (req, res) => {
  const { name, amount, interest } = req.body;
  const plan = await Plan.create({ name, amount, interest });
  if (plan) {
    res.send(plan);
  }
});

// ? getting all plans
const getAllPlans = asyncHandler(async (req, res) => {
  const plans = await Plan.find({});
  if (plans) {
    res.send(plans);
  }
});

module.exports = { createPlan, getAllPlans };
