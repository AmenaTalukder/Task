import React from "react";
import { FaStar } from "react-icons/fa";
import "../Styles/renderStars .css";
import { FaStarHalfStroke } from "react-icons/fa6";

const renderStars = (rating) => {
  const numericRating = parseFloat(rating);
  const fullStars = Math.floor(numericRating);
  const halfStars = numericRating % 1 >= 0.5 ? 1 : 0;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`full-${i}`} className="star">
        <FaStar />
      </span>
    );
  }

  if (halfStars > 0) {
    stars.push(
      <span key="half" className="star">
        <FaStarHalfStroke className="empty-star" />
      </span>
    );
  }

  return <div className="star-container">{stars}</div>;
};

export default renderStars;
