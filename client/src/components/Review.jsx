import React from "react";

function Review({ review }) {
  return (
    <div className="review-container">
      <div className="review-header">
        {review.bookTitle + " " + review.rating + " " + review.createdAt}{" "}
        {review.bookAuthor}{" "}
      </div>
      <div className="review-body">{review.content}</div>
      <div className="review-footer"></div>
    </div>
  );
}

export default Review;
