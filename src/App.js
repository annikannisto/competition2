import React from "react";
import "./App.css";
import LikeButton from "./components/LikeButton";
import "./components/styles.css";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";
import FaceBook from "./components/Facebook";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";
import NumbersTable from "./components/NumbersTable";

const App = () => {
  return (
    <div className="app-container">
      <div className="app-section">
        <h2>Ratings</h2>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div className="app-section">
        <h2>Driver Cards</h2>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{ model: "Toyota Corolla Altis", licensePlate: "CO42DE" }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{ model: "Audi A3", licensePlate: "BE33ER" }}
        />
      </div>
      <div className="app-section">
        <h2>Like Button</h2>
        <LikeButton />
      </div>
      <div className="app-section">
        <h2>Clickable Picture</h2>
        <ClickablePicture
          img="https://raw.githubusercontent.com/tx00-web-en/Activities/week4/Competition-2/images/maxence.png"
          imgClicked="https://raw.githubusercontent.com/tx00-web-en/Activities/week4/Competition-2/images/maxence-glasses.png"
        />
      </div>
      <div className="app-section">
        <h2>Dice</h2>
        <Dice />
      </div>
      <div className="app-section">
        <h2>Carousel</h2>
        <Carousel
          images={[
            "https://randomuser.me/api/portraits/women/1.jpg",
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/men/2.jpg",
          ]}
        />
      </div>
      <div className="app-section">
        <h2>Numbers Table</h2>
        <NumbersTable limit={12} />
      </div>
      <div className="app-section">
        <h2>Facebook (Advanced)</h2>
        <FaceBook />
      </div>
    </div>
  );
};

export default App;
