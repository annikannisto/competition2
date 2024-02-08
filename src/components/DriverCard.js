import React from 'react';
import "./styles.css";

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card">
      <img className="driver-img" src={img} alt={name} />
      <div className="driver-info">
        <h1>{name}</h1>
        <div className="driver-rating">
          {Array.from({ length: Math.round(rating) }, (_, index) => (
            <span key={index}>★</span>
          ))}
          {Array.from({ length: Math.round(5 - rating) }, (_, index) => (
            <span key={index}>☆</span>
          ))}
        </div>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;
