const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    bookTitle: {
      type: String,
      required: [true, "missing book title"],
    },
    bookAuthor: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.Now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);
