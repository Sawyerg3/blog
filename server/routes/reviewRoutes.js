const express = require("express");
const router = express.Router();
const {
  getReviews,
  setReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

const { protect } = require("../middleware/adminAuthMiddleware");

router.route("/").get(getReviews).post(protect, setReview);
router.route("/:id").delete(protect, deleteReview);
// router.route('/:id').delete(protect, deleteReview).put(protect, updateReview)

module.exports = router;
