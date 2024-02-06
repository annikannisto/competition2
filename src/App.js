import React from "react";
import "./App.css";
import LikeButton from "./components/LikeButton";
import "./components/LikeButton.css";
import ClickablePicture from "./components/ClickablePicture";
import "./components/ClickablePicture.css";
import FaceBook from "./components/Facebook";

const App = () => {
  return (
    <div>
      <LikeButton />
      <ClickablePicture
        img="https://raw.githubusercontent.com/tx00-web-en/Activities/week4/Competition-2/images/maxence.png"
        imgClicked="https://raw.githubusercontent.com/tx00-web-en/Activities/week4/Competition-2/images/maxence-glasses.png"
      />
      <FaceBook />
    </div>
  );
};

export default App;
