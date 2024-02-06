import React, { useState } from "react";
import "./Dice.css";

const Dice = () => {
  const [diceValue, setDiceValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getRandomDiceValue = () => {
    setIsLoading(true);
    setDiceValue(null);

    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(randomValue);
      setIsLoading(false);
    }, 1000);
  };

  const handleImageClick = () => {
    if (!isLoading) {
      getRandomDiceValue();
    }
  };

  return (
    <div className="dice-container">
      <img
        src={`${process.env.PUBLIC_URL}/images/dice${diceValue || "-empty"}.png`}
        alt={`Dice Value: ${diceValue}`}
        onClick={handleImageClick}
        className="dice-img"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Dice;
