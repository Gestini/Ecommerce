import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar.scss";
import { GestinyLogo } from "../../assets/Logo";

const Navbar = ({ openModal }: any) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar--landing flex w-[100%] animation ${isScrolled ? 'navbarWrapper' : 'bg-[#fbfbfb]'} z-10 justify-center mx-auto gap-4 items-center py-[15px] sticky top-0 left-0`}>
        <div className="navbarmedio flex w-[80%]">
          <div className="izq-navbar--landing flex ">
            <div className="logo--landing">
              <GestinyLogo />
            </div>
          </div>
          <div className="items-navbar--landing flex flex-grow px-[50px] gap-4 ">
            <div className="cursor-pointer gap-2 flex justify-center items-center text-[#9b9b9b]">
              <span className=" font-[500] text-[14px]">Soluciones</span>
              <IoIosArrowDown />
            </div>
            <div className="cursor-pointer  gap-2 flex justify-center items-center text-[#9b9b9b]">
              <span className=" font-[500] text-[14px]">Descargar</span>
            </div>
            <div className="cursor-pointer gap-2 flex justify-center items-center text-[#9b9b9b]">
              <span className=" font-[500] text-[14px]">Equipo</span>
            </div>
            <div className="cursor-pointer gap-2 flex justify-center items-center text-[#9b9b9b]">
              <span className=" font-[500] text-[14px] ">Centro de ayuda</span>
            </div>
            <div className="cursor-pointer  gap-2 flex justify-center items-center text-[#9b9b9b]">
              <span className=" font-[500] text-[14px]">Precios</span>
            </div>
          </div>
          <div className="der-navbar--landing w-[300px] flex items-center justify-between  h-full ">
            <div className="gap-2 flex justify-center items-center text-[#9b9b9b]">
              <span className=" font-[500] text-[14px]">Iniciar Sesion</span>
            </div>
            <button
              onClick={openModal}
              className=" buttontypesbussines"
            >
              Empieza gratis
              <div className="shine-effect"></div>
            </button>
          </div>
        </div>
      </div >
    </>

  );
};

export default Navbar;
