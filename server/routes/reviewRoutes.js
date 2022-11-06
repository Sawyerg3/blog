const express = require("express");
const router = express.Router();
const {
  getReviews,
  setReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

// const { protect } = require('../middleware/authMiddleware')

router.route("/").get(getReviews).post(setReview);
router.route("/:id").delete(deleteReview);
// router.route('/:id').delete(protect, deleteReview).put(protect, updateReview)

module.exports = router;
