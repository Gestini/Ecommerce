import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar.scss";
import { GestinyLogo } from "../../assets/Logo";

const Navbar = () => {
  return (
    <div className=" navbar--landing z-10 flex w-[100%] gap-4 items-center absolute  px-[100px] pt-[15px] ">
      <div className="izq-navbar--landing flex ">
        <div className="logo--landing  ">
          {" "}
          <GestinyLogo />
        </div>
      </div>
      <div className="items-navbar--landing flex flex-grow px-[50px] gap-4 ">
        <div className="item-navbar--landing cursor-pointer  gap-2 flex justify-center items-center text-[#9b9b9b]">
          <span className=" font-[500] ">Soluciones</span>
          <IoIosArrowDown className="  " />
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
        <button className="  bg-[#A0DB8E] px-[20px] py-[10px] rounded-lg font-[600] ">
          Empieza gratis
        </button>
      </div>
    </div>
  );
};

export default Navbar;
