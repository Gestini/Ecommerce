import React from "react";
import "./Landing.scss";
import Cuadrados from "../../assets/cuadrados.png";
import Navbar from "../../components/Landing/Navbar";
import Home from "../../components/Landing/Home";

import Whoweare from "../../components/Landing/sections/Whoweare";
import Doitwithgenis from "@/components/Landing/sections/Doitwithgenis";
import Genishelpsyou from "@/components/Landing/sections/Genishelpsyou";
import Managelikethebig from "@/components/Landing/sections/Managelikethebig";

const index = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Managelikethebig />
      <Whoweare />
      <Doitwithgenis />
      <Genishelpsyou />
    </>
  );
};

export default index;
