import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer-container">
        <div className="footer-address">
          <h2>BikePark</h2>
          <p>
            <FaLocationArrow className="footer-icon" />
            <span>Level-4, 34, Awal Centre, Banani, Dhaka </span>
          </p>
          <p>
            <FaMailBulk className="footer-icon" />{" "}
            <span> Official: naiem.n123@gmail.com </span>
          </p>
          <p>
            <FaPhone className="footer-icon" />
            <span> HelpLine: 0126666633, 0123647125</span>
          </p>
        </div>
        <div className="footer-link">
          <p>Important Link</p>
        </div>
        <div className="social-media">
          <h4>Social Media</h4>
          <div className="social-icon">
            <FaFacebook className="footer-social-icon"></FaFacebook>
            <FaInstagram className="footer-social-icon"></FaInstagram>
            <FaYoutube className="footer-social-icon"></FaYoutube>
            <FaGoogle className="footer-social-icon"></FaGoogle>
          </div>
        </div>
        <div className="newsletter">
          <p>NewsLatter</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
