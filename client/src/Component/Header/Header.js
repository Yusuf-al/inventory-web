import React from "react";
import "./Header.css";
import bg_img from "./../../imgs/header-bg-4.jpg";
import { useTypewriter } from "react-simple-typewriter";
import Spinner from "../Spinner/Spinner";

const Header = () => {
  const { text } = useTypewriter({
    words: ["warehouse"],
    loop: 0,
  });
  return (
    <div className="header-div">
      <img src={bg_img} alt="" />
      <div className="header-title">
        <h1>Bike Park</h1>
        <h3>A Bike's {text} </h3>
      </div>
    </div>
  );
};

export default Header;
