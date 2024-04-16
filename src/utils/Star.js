import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ onStarClick }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    onStarClick(value);
  };

  return (
    <div>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;

        return (
          <FaStar
            key={i}
            className="star"
            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
            onClick={() => handleClick(ratingValue)}
          />
        );
      })}
    </div>
  );
};

export default Star;
