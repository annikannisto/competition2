import React, { useState } from "react";
import profilesData from "./data/berlin.json";
import "./styles.css";

const FaceBook = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const countries = Array.from(
    new Set(profilesData.map((profile) => profile.country))
  );

  const handleCountryClick = (country) => {
    // Check if clicking the same country to unselect
    if (selectedCountry === country) {
      setSelectedCountry(null);
    } else {
      setSelectedCountry(country);
      setDropdownOpen(false);

      // Scroll to the selected country's ID card only if the country is not null
      const selectedCountryId = country.toLowerCase().replace(" ", "-");
      const element = document.getElementById(selectedCountryId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="facebook">
      <div className="country-buttons">
        {/* Button for All Countries */}
        <button
          onClick={() => handleCountryClick("All")}
          className={selectedCountry === "All" ? "selected" : ""}
        >
          All Countries
        </button>

        {/* Four individual country buttons */}
        {countries.slice(0, 4).map((country, index) => (
          <button
            key={index}
            onClick={() => handleCountryClick(country)}
            className={selectedCountry === country ? "selected" : ""}
          >
            {country}
          </button>
        ))}

        {/* Button to open/close the dropdown */}
        <button onClick={handleDropdownToggle}>...</button>

        {/* Dropdown with the rest of the individual countries */}
        {isDropdownOpen &&
          countries.slice(4).map((country, index) => (
            <button
              key={index}
              onClick={() => handleCountryClick(country)}
              className={selectedCountry === country ? "selected" : ""}
            >
              {country}
            </button>
          ))}
      </div>

      <div className="profile-container">
        {profilesData.map((profile, index) => (
          <div
            key={index}
            id={profile.country.toLowerCase().replace(" ", "-")}
            className={`id-card ${
              (selectedCountry === profile.country ||
                selectedCountry === "All") &&
              "selected-country"
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
