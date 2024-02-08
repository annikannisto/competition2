import React from "react";
import "./styles.css";

const NumbersTable = ({ limit }) => {
  const numbers = Array.from({ length: limit }, (_, index) => index + 1);

  return (
    <div className="grid-container">
      {numbers.map((number) => (
        <div
          key={number}
          className="grid-item"
          style={{ backgroundColor: number % 2 === 0 ? "red" : "" }}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;
