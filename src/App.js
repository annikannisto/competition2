import React from'react';
import './App.css';
import LikeButton from './components/LikeButton';
import './components/LikeButton.css';
import ClickablePicture from './components/ClickablePicture';

const App = () => {
  return (
    <div className="container">
      <LikeButton />
      <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />
    </div>
  );
};

export default App;
