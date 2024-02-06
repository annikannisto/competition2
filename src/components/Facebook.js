import React, { useState } from "react";
import profilesData from "../data/berlin.json";
import "./Facebook.css";

const FaceBook = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = Array.from(
    new Set(profilesData.map((profile) => profile.country))
  );

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="facebook">
      <div className="country-buttons">
        {countries.map((country, index) => (
          <button key={index} onClick={() => handleCountryClick(country)}>
            {country}
          </button>
        ))}
      </div>
      <div className="profile-container">
        {profilesData.map((profile, index) => (
          <div
            key={index}
            className={`id-card ${
              selectedCountry === profile.country ? "selected-country" : ""
            }`}
          >
            <div className="picture">
              <img
                src={profile.img}
                alt={`${profile.firstName} ${profile.lastName}`}
              />
            </div>
            <div className="details">
              <p>
                <strong>First name:</strong> {profile.firstName}
              </p>
              <p>
                <strong>Last name:</strong> {profile.lastName}
              </p>
              <p>
                <strong>Country:</strong> {profile.country}
              </p>
              <p>
                <strong>Is Student:</strong> {profile.isStudent ? "Yes" : "No"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaceBook;