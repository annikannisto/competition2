import React, { useState } from "react";
import "./styles.css";

const ClickablePicture = ({ img, imgClicked }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <img
      src={isClicked ? imgClicked : img}
      alt="Clickable Picture"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default ClickablePicture;
