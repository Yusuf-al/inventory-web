import React from "react";
import Achivement from "../Achivement/Achivement";
import FetaureBike from "../FeatureBike/FetaureBike";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Intro></Intro>
      <FetaureBike></FetaureBike>
      <Achivement></Achivement>
    </div>
  );
};

export default Home;
