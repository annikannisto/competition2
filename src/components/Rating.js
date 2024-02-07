import React from 'react';
import './Rating.css';

const Rating = ({ children }) => {
  const filledStars = Math.floor(children);
  const hasHalfStar = children - filledStars >= 0.5;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        stars.push(<span className="star" key={i}>★</span>);
      } else if (hasHalfStar && i === filledStars) {
        stars.push(<span className="half-star" key={i}>★</span>);
      } else {
        stars.push(<span className="empty-star" key={i}>☆</span>);
      }
    }
    return stars;
  };

  return (
    <div className="rating">
      {renderStars()}
    </div>
  );
};

export default Rating;
