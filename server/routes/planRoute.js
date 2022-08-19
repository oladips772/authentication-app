/** @format */
const { createPlan, getAllPlans } = require("../controllers/planController");

const planRouter = require("express").Router();

planRouter.post("/create", createPlan);
planRouter.get("/get-plans", getAllPlans);
module.exports = planRouter;
