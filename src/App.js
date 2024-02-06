import React from "react";
import "./App.css";
import LikeButton from "./components/LikeButton";
import "./components/LikeButton.css";
import ClickablePicture from "./components/ClickablePicture";
import "./components/ClickablePicture.css";
import FaceBook from "./components/Facebook";

const App = () => {
  return (
    <div className="app-container">
      <div className="app-section">
        <LikeButton />
      </div>
      <div className="app-section">
        <ClickablePicture
          img="https://raw.githubusercontent.com/tx00-web-en/Activities/week4/Competition-2/images/maxence.png"
          imgClicked="https://raw.githubusercontent.com/tx00-web-en/Activities/week4/Competition-2/images/maxence-glasses.png"
        />
      </div>
      <div className="app-section">
        <FaceBook />
      </div>
    </div>
  );
};

export default App;
