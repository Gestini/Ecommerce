import React from "react";
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
import { GestinyLogo } from "@/assets/Logo";

const Index = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 segundos de carga
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <div className="logo-container">
            <GestinyLogo width='300px' height='300px' />
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <Managelikethebig />
          <Whoweare />
          <Doitwithgenis />
          {/* <Genishelpsyou /> */}
          <Yourmodel />
          <Footer />
        </>
      )}
    </>
  );
};

export default Index;
