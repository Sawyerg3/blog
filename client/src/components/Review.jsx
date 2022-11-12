import React from "react";
import moment from "moment";
import StarIcon from "@mui/icons-material/Star";
import "../styles/review.css";

function Review({ review }) {
  //* ugly*
  const ratingStars = () => {
    switch (review.rating) {
      case 5:
        return (
          <div>
            <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
          </div>
        );
      case 4:
        return (
          <div>
            <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
          </div>
        );
      case 3:
        return (
          <div>
            <StarIcon /> <StarIcon /> <StarIcon />
          </div>
        );
      case 2:
        return (
          <div>
            <StarIcon /> <StarIcon />
          </div>
        );
      case 1:
        return <StarIcon />;
    }
    return <></>;
  };

  return (
    <div className="review-container">
      <div className="review-header">
        <div className="titles">
          <div className="title"></div>
          <h1>{review.bookTitle}</h1>

          <h5>By {review.bookAuthor}</h5>
        </div>
        <div className="rating">{ratingStars()}</div>
      </div>

      <p className="review-body">{review.content}</p>
      <div className="review-footer">
        <h6>{moment(review.createdAt).format("DD-MM-YYYY")}</h6>
      </div>
    </div>
  );
}

export default Review;
