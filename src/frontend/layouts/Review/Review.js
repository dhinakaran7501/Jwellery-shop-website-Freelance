import React from "react";
import "./Review.scss";
import { Rating } from "@mui/material";

const Review = ({ reviews }) => {
  return (
    <div className="review-box">
      <h3 className="review-head">Customer Reviews :</h3>
      <div className="reviewlists">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div className="review-container" key={review.id}>
              <div className="review-header">
                <h4>{review.title}</h4>
                {/* <span className="review-score">{review.score}</span> */}

                <Rating
                  name="read-only"
                  value={review.score}
                  readOnly
                  precision={1}
                  style={{ fontSize: "18px" }}
                />
              </div>
              {review.image && (
                <img
                  src={review.image.url}
                  alt={review.image.name}
                  className="review-image"
                />
              )}
              <p className="review-text">{review.review}</p>
              <div className="review-footer">
                <span className="review-username">
                  By <span>{review.username}</span>
                </span>
                <span className="review-date">{review.date}</span>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews are here.</p>
        )}
      </div>
    </div>
  );
};

export default Review;
