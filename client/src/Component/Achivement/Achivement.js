import React, { useEffect } from "react";
import CountUp from "react-countup";
import { FaCar, FaStar, FaTrophy, FaUser } from "react-icons/fa";
import "./Achivement.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const Achivement = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="achive-div">
      <h1>Achivements</h1>
      <div className="achive-list">
        <div className="list-item" data-aos="fade-right">
          <FaCar className="acv-icon"></FaCar>
          <h4>Bikes in stock</h4>
          <CountUp delay={2} end={113} />
        </div>
        <div className="list-item" data-aos="fade-up">
          <FaTrophy className="acv-icon"></FaTrophy>
          <h4>Awards</h4>
          <CountUp delay={2} end={150} />
        </div>
        <div className="list-item" data-aos="fade-down">
          <FaStar className="acv-icon"></FaStar>
          <h4>Dealer Reviews</h4>
          <CountUp delay={2} end={102} />
        </div>
        <div className="list-item" data-aos="fade-left">
          <FaUser className="acv-icon"></FaUser>
          <h4>Happy Customers</h4>
          <CountUp delay={2} end={98} />
        </div>
      </div>
    </div>
  );
};

export default Achivement;
