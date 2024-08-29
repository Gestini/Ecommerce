import React from "react";
import "./Landing.scss";
import Cuadrados from "../../assets/cuadrados.png";
import Navbar from "../../components/Landing/Navbar";
import Home from "../../components/Landing/Home";
import FeaturesSection from "../../components/Landing/sections/Featuresection";
import Whoweare from "../../components/Landing/sections/Whoweare";

const index = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Whoweare />
    </>
  );
};

export default index;
