import React from "react";
import "./App.css";
import LikeButton from "./components/LikeButton";
import "./components/LikeButton.css";
import ClickablePicture from "./components/ClickablePicture";
import "./components/ClickablePicture.css";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";
import FaceBook from "./components/Facebook";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";


const App = () => {
  return (
    <div className="app-container">
      <div className="app-section">
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      </div>
      <div className="app-section">
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{ model: "Toyota Corolla Altis", licensePlate: "CO42DE"}}/>
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{ model: "Audi A3", licensePlate: "BE33ER"}}/>
      </div>
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
        <Dice />
      </div>
      <div className="app-section">
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
    </div>
      <div className="app-section">
        <FaceBook />
      </div>
    </div>
  );
};

export default App;
