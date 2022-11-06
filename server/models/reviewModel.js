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
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);
