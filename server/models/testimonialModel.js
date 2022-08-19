/** @format */
const mongoose = require("mongoose");

const TestiMonialSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Testimonial = mongoose.model("Testimonial", TestiMonialSchema);
module.exports = Testimonial;
