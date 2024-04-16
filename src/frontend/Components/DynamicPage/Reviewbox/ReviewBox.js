import React, { useRef, useState } from "react";
import Star from "../../../../utils/Star";
import { useDispatch } from "react-redux";
import { handleReviews } from "../../../Redux/Slice";

const ReviewBox = ({ ourProductsLists }) => {
  const dispatch = useDispatch();
  const [reviewData, setReviewData] = useState({
    score: 0,
    title: "",
    review: "",
  });
  const [reviewImage, setReviewImage] = useState(null);
  const [error, setError] = useState(false);
  const [togglebtn, setTogglebtn] = useState(false);

  // review image
  const fileInputRef = useRef(null);

  const handleStarClick = (rating) => {
    setReviewData({ ...reviewData, score: rating });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setReviewImage(file);
    fileInputRef.current.files = e.target.files;
  };

  const handleToggleBtn = () => {
    setTogglebtn(true);
  };

  const handlePostReview = () => {
    if (reviewData.score && reviewData.title && reviewData.review) {
      const review = {
        id: Date.now(),
        score: reviewData.score,
        title: reviewData.title,
        review: reviewData.review,
        image: reviewImage
          ? {
              name: reviewImage.name,
              url: URL.createObjectURL(reviewImage),
            }
          : null,
        username: "loggedInUsername",
        date: new Date().toDateString(),
      };
      fileInputRef.current.value = "";

      setReviewData({
        score: 0,
        title: "",
        review: "",
      });
      setReviewImage(null);
      console.log(review);
      dispatch(handleReviews(review));
      setTogglebtn(false);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div className="Review-box">
      <h3>Write a Review</h3>
      <p className="requiredField">* Indicates a required field </p>
      <div className="review-row">
        <div>
          <p>* Score</p>
          <Star onStarClick={handleStarClick} value={reviewData.star} />
        </div>
        <div className="text-input">
          <p>* Title</p>
          <select
            onChange={handleInputChange}
            value={reviewData.title}
            name="title"
          >
            <option>select the category</option>
            {ourProductsLists.map((values, index) => (
              <option key={index}>{values.itemName}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="text-input">
        <p>* Review</p>
        <textarea
          rows={5}
          name="review"
          onChange={handleInputChange}
          value={reviewData.review}
          required
        />
      </div>
      <div>
        <p>Upload Image</p>
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      {error && <p className="red">* Fill the Required Field</p>}
      <div className="post-btn">
        {" "}
        <button onClick={handlePostReview} className="button-43">
          Post a Review
        </button>
      </div>
    </div>
  );
};

export default ReviewBox;
