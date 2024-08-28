import React from "react";
import "./Landing.scss";
import Cuadrados from "../../assets/cuadrados.png";
import Navbar from "../../components/Landing/Navbar";
import Home from "../../components/Landing/Home";

const index = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default index;
