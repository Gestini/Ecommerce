import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar.scss";
import { GestinyLogo } from "../../assets/Logo";

const Navbar = ({ openModal }: any) => {
  return (
    <>
      <div className=" navbar--landing z-10 flex w-[100%] justify-center mx-auto gap-4 items-center absolute pt-[15px]">
        <div className="navbarmedio flex w-[80%]  ">
          <div className="izq-navbar--landing flex ">
            <div className="logo--landing ">
              <GestinyLogo />
            </div>
          </div>
          <div className="items-navbar--landing flex flex-grow px-[50px] gap-4 ">
            <div className="item-navbar--landing cursor-pointer  gap-2 flex justify-center items-center text-[#9b9b9b]">
              <span className=" font-[500] ">Soluciones</span>
              <IoIosArrowDown />
            </div>
            <div className="item-navbar--landing cursor-pointer   gap-2 flex justify-center items-center text-[#9b9b9b]">
              <span className=" font-[500] ">Descargar</span>
            </div>
            <div className="item-navbar--landing cursor-pointer  gap-2 flex justify-center items-center text-[#9b9b9b]">
              <span className=" font-[500] ">Equipo</span>
            </div>
            <div className="item-navbar--landing cursor-pointer  gap-2 flex justify-center items-center text-[#9b9b9b]">
              <span className=" font-[500] ">Centro de ayuda</span>
            </div>
            <div className="item-navbar--landing cursor-pointer  gap-2 flex justify-center items-center text-[#9b9b9b]">
              <span className=" font-[500] ">Precios</span>
            </div>
          </div>
          <div className="der-navbar--landing w-[300px] flex items-center justify-between  h-full ">
            <div className="item-navbar--landing  gap-2 flex justify-center items-center text-[#9b9b9b]">
              <span className=" font-[500] ">Iniciar Sesion </span>
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
      </div>
    </>

  );
};

export default Navbar;
