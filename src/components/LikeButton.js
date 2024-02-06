import React, { useState } from "react";
import "./LikeButton.css";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [buttonColor, setButtonColor] = useState("purple");

  const handleLikeClick = () => {
    const newLikeCount = likeCount + 1;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    setLikeCount(newLikeCount);
    setButtonColor(randomColor);
  };

  return (
    <button
      className={`like-button like-button-${buttonColor}`}
      onClick={handleLikeClick}
    >
      {likeCount} Likes
    </button>
  );
};

export default LikeButton;
