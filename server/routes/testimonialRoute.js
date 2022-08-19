/** @format */
const {
  createTestimonial,
  getTestimonials,
  approveTestimonial,
} = require("../controllers/testimonialController");

const testimonialRouter = require("express").Router();

// ? creating testimonial route
testimonialRouter.post("/create", createTestimonial);

// ? getting testimonials route
testimonialRouter.get("/", getTestimonials);

// ? approve testimonial route
testimonialRouter.put("/approve/:id", approveTestimonial);

module.exports = testimonialRouter;
