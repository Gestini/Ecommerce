import { GestinyLogo } from "@/assets/Logo";
import Doitwithgenis from "@/components/Landing/sections/Doitwithgenis";
import Footer from "@/components/Landing/sections/Footer";
import Managelikethebig from "@/components/Landing/sections/Managelikethebig";
import Yourmodel from "@/components/Landing/sections/Yourmodel";
import StepModal from "@/components/StepModal/StepModal";
import React from "react";
import Home from "../../components/Landing/Home";
import Navbar from "../../components/Landing/Navbar";
import Whoweare from "../../components/Landing/sections/Whoweare";
import "./Landing.scss";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 segundos de carga
    return () => clearTimeout(timer);
  }, []);

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
  )
}

export default Index;
