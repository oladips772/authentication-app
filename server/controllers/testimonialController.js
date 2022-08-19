/** @format */
const asyncHandler = require("express-async-handler");
const Testimonial = require("../models/testimonialModel");

// ? creating testimonial
const createTestimonial = asyncHandler(async (req, res) => {
  const { owner, text } = req.body;
  const testimonial = await Testimonial.create({ owner, text });
  if (testimonial) {
    res.status(200).send(testimonial);
  }
});

// ? get all testimonial
const getTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find({});
  if (testimonials) {
    res.status(200).send(testimonials);
  }
});

// ? approving testimonial
const approveTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.findById(req.params.id);
  if (testimonial) {
    testimonial.status = "approved";
    await testimonial.save();
    res.send(testimonial);
  }
});

module.exports = { createTestimonial, getTestimonials, approveTestimonial };
