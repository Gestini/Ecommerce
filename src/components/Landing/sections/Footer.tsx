import React from "react";
import Gestini from "../../../assets/Logos/Gestini.png";
import { FaInstagram } from "react-icons/fa";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer--landing bg-[#FAFAFA] px-[100px] py-[100px]  w-full flex flex-col ">
      <div className="topfooter-landing px-[100px] border-b-1 pb-[50px] border-[#70C955] flex w-full justify-between ">
        <div className="sectionlogofooter-landing w-full max-w-[365px] flex flex-col gap-[32px] ">
          <img src={Gestini} className=" w-[45px] " alt="" />
          <p className="descriptionfooter-landing font-Figtree text-[#929AA7]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eum
            alias iusto quidem eaque voluptates vero dolore veritatis
            repudiandae at.
          </p>
          <div className="redesfooter-landing text-[25px] text-[#929AA7] flex gap-[20px] ">
            <FaInstagram />
            <FaInstagram />
            <FaInstagram />
            <FaInstagram />
          </div>
        </div>
        <div className="columnfooter-landing flex gap-[110px] ">
          <div className="colinfofooter-landing flex flex-col font-Figtree gap-5 text-[#929AA7]    ">
            <h6 className=" font-[600] ">Menú</h6>
            <Link to={""}>
              <p>Explorar</p>
            </Link>
            <Link to={""}>
              <p>Tienda</p>
            </Link>
            <Link to={""}>
              <p>Comunidad</p>
            </Link>
            <Link to={""}>
              <p>Planer</p>
            </Link>
          </div>
          <div className="colinfofooter-landing flex flex-col font-Figtree gap-5 text-[#929AA7]    ">
            <h6 className=" font-[600] ">Ayuda</h6>
            <Link to={""}>
              <p>Ayuda</p>
            </Link>
            <Link to={""}>
              <p>Atención al cliente</p>
            </Link>
            <Link to={""}>
              <p>Términos y condiciones</p>
            </Link>
            <Link to={""}>
              <p>Politica de privacidad</p>
            </Link>
          </div>
          <div className="colinfofooter-landing flex flex-col gap-5 font-Figtree text-[#929AA7]    ">
            <h6 className=" font-[600] ">Ayuda</h6>
            <Link to={""}>
              <p>Ayuda</p>
            </Link>
            <Link to={""}>
              <p>Atención al cliente</p>
            </Link>
            <Link to={""}>
              <p>Términos y condiciones</p>
            </Link>
            <Link to={""}>
              <p>Politica de privacidad</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bottomfooter-landing  w-full flex justify-center items-center text-[14px] text-[#929AA7] py-[40px] ">
        © Copyright 2024, All Rights Reserved by Gestini LLC
      </div>
    </div>
  );
};

export default Footer;
