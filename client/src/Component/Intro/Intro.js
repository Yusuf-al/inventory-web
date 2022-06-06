import React from "react";
import "./Intro.css";
import {
  FaCar,
  FaFacebookMessenger,
  FaKey,
  FaMoneyCheck,
} from "react-icons/fa";

const Intro = () => {
  return (
    <div className="intro-div">
      <div className="intro-title">
        <p className="intro-welcome">Welcome to ourwebsite</p>
        <h1>Bike Park</h1>
        <p className="intr-des">
          Bike Park is a bike warehouse based in Bangladesh. We have shops in
          All divisions in Bangladesh, we are one of the largest bike warehouses
          in Bangladesh. We want to give back to the forces for what they do for
          us.
        </p>
      </div>
      <div className="support-div">
        <div className="support support-first">
          <h2>
            <FaCar className="icon"></FaCar>
          </h2>

          <h4>All Brands</h4>
        </div>
        <div className="support support-second">
          <h2>
            <FaFacebookMessenger className="icon"></FaFacebookMessenger>
          </h2>
          <h4>Free Support</h4>
        </div>
        <div className="support support-third">
          <h2>
            <FaKey className="icon"></FaKey>
          </h2>
          <h4>Delaership</h4>
        </div>
        <div className="support support-forth">
          <h2>
            <FaMoneyCheck className="icon"></FaMoneyCheck>
          </h2>
          <h4>Affordable</h4>
        </div>
      </div>
    </div>
  );
};

export default Intro;
