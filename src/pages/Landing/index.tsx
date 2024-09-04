import React, { useState } from "react";
import "./Landing.scss";
import Cuadrados from "../../assets/cuadrados.png";
import Navbar from "../../components/Landing/Navbar";
import Home from "../../components/Landing/Home";

import Whoweare from "../../components/Landing/sections/Whoweare";
import Doitwithgenis from "@/components/Landing/sections/Doitwithgenis";
import Genishelpsyou from "@/components/Landing/sections/Genishelpsyou";
import Managelikethebig from "@/components/Landing/sections/Managelikethebig";
import Yourmodel from "@/components/Landing/sections/Yourmodel";
import Footer from "@/components/Landing/sections/Footer";
import StepModal from "@/components/StepModal/StepModal";

const index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Navbar />
      <Home openModal={openModal} />
      <Managelikethebig />
      <Whoweare />
      <Doitwithgenis />
      {/* <Genishelpsyou /> */}
      <Yourmodel openModal={openModal} />
      <Footer />
      <StepModal isOpen={isModalOpen} onClose={closeModal} initialStep={1} />
    </>
  );
};

export default index;
