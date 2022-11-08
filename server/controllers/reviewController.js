const Review = require("../models/reviewModel");
const asyncHandler = require("express-async-handler");

/*
getReviews,
  setReview,
  updateReview,
  deleteReview,
*/

// @desc Gets Fall book reviews
// @route GET /api/reviews
// @access public
const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find();
  res.status(200).json(reviews);
});

/// @desc Creates new book review
/// @route Review /api/reviews
/// @access private
const setReview = asyncHandler(async (req, res) => {
  const { bookTitle, bookAuthor, rating, content } = req.body.review;
  //* check fields ?

  try {
    const review = await Review.create({
      bookTitle,
      bookAuthor,
      rating,
      content,
    });
    res.status(200).json({ success: true, review: review });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
});

/// @desc Creates new book review
/// @route Review /api/reviews
/// @access private
const deleteReview = asyncHandler(async (req, res) => {
  //* checks ?

  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "removed" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = {
  setReview,
  getReviews,
  deleteReview,
};
