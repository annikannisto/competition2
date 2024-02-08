import React, { useState, useEffect } from "react";
import "./styles.css";

const Dice = () => {
  const [diceValue, setDiceValue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRandomDiceValue();
  }, []); // Run once on component mount

  const getRandomDiceValue = () => {
    setIsLoading(true);

    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(randomValue);
      setIsLoading(false);
    }, 1000);
  };

  const handleImageClick = () => {
    if (!isLoading) {
      setDiceValue(null); // Set to null to show blank
      setIsLoading(true);

      setTimeout(() => {
        getRandomDiceValue();
      }, 1000);
    }
  };

  return (
    <div className="dice-container">
      <img
        src={`${process.env.PUBLIC_URL}/images/dice${
          diceValue || "-empty"
        }.png`}
        alt={`Dice Value: ${diceValue}`}
        onClick={handleImageClick}
        className="dice-img"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Dice;
