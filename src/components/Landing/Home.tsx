import React from "react";
import Cuadrado from "../../assets/Herosection.png";
// import Mastiempo from "../../assets/mastiempo.png";
import Gestini from "../../assets/Logos/Gestinii.png";

import { FaMagic } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

import "./Home.scss";
import Slideemprendedores from "./sliders/Slideemprendedores";
import Slideinfraestructura from "./sliders/Slideinfraestructura";

const Home = () => {
  return (
    <div className="home-landing relative w-full flex justify-center items-center min-h-screen  pt-[68px]">
      <div className="containermiddle-landing mt-[-200px] flex flex-col gap-2 ">
        <div className="Emprendedoresempresarios-landing flex flex-col gap-8">
          <h3 className=" text-[#b9b9b9] font-[600] text-center ">
            PARA EMPRENDEDORES Y EMPRESARIOS
          </h3>
          <Slideemprendedores />
        </div>
        <div className="titlemiddle-landing flex justify-center">
          <img src={Gestini} className="mastimepologo w-[1000px] " alt="" />
        </div>
        <div className="bottomiddle-landing flex flex-col gap-8">
          <div className="rowbotonera items-center flex justify-center  gap-5 ">
            <button className="empiezagratis flex gap-2 bg-[#A0DB8E] font-[600] items-center px-[15px] py-[10px] rounded-lg border-[#ccc9c8] border-4 ">
              <span>Empieza gratis</span>
              <FaMagic />
            </button>
            <button className="descargawindow flex gap-2  font-[600] items-center px-[20px] py-[8px]  text-[#969996] rounded-lg border-[#969996] border-2 ">
              <span>Descargar para Windows</span>
            </button>
          </div>
          <h4 className="descriptionhome-landing text-center text-[#969996] font-[600]  text-[20px] ">
            Empieza gratis y gestiona tu empresa con procesos automatizados y
            faciles.
          </h4>
        </div>
      </div>
      <div className="bottomcontainer-landing absolute bottom-[50px] gap-8 flex flex-col justify-center items-center ">
        <div className="infoslider-landing flex gap-2 text-[#969996] items-center font-[500] ">
          <IoMdArrowDropright />
          <span>Infraestructura Segura e Innovadora</span>
        </div>
        <div className="sliderinfraestructura-landing ">
          <Slideinfraestructura />
        </div>
      </div>
    </div>
  );
};

export default Home;
