import React from "react";
import profiles from "../data/berlin.json";
import "./Facebook.css";

const FaceBook = () => {
  return (
    <div className="facebook">
      {profiles.map((profile) => (
        <div key={profile.firstName + profile.lastName} className="id-card">
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
              <strong>Gender:</strong> {profile.gender}
            </p>
            <p>
              <strong>Height:</strong> {(profile.height / 100).toFixed(2)}m
            </p>
            <p>
              <strong>Birth:</strong> {new Date(profile.birth).toDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaceBook;
