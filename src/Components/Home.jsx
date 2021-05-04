import React from "react";
import sangokuNuage from "../img/sangoku-nuage.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>
        <span className="first-title">Dragon </span>
        <span className="second-title">Maxou </span>
      </h1>

      <img src={sangokuNuage} className="sangoku-nuage"></img>
    </div>
  );
};

export default Home;
