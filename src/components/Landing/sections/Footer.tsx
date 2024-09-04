import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.scss";
import Gestini from "../../../assets/Logos/Gestini.png";

const Footer = () => {
  // Datos internos del componente
  const socialLinks = [
    { url: "https://www.instagram.com/gestiniok", icon: <FaInstagram /> },
  ];

  const menuItems = [
    { text: "Herramientas", url: "#herramientas" },
    { text: "Caracteristicas", url: "#caracteristicas" },
    { text: "Modelos Empresariales", url: "#modelosempresariales" },
    { text: "Planer", url: "/planner" },
  ];

  const helpItems = [
    { text: "Ayuda", url: "/help" },
    { text: "Atención al cliente", url: "/customer-service" },
    { text: "Términos y condiciones", url: "/terms" },
    { text: "Política de privacidad", url: "/privacy" },
  ];

  const otherItems = [
    { text: "Contacto", url: "/contact" },
    { text: "Sobre nosotros", url: "/about" },
    { text: "Blog", url: "/blog" },
    { text: "Carreras", url: "/careers" },
  ];

  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eum alias iusto quidem eaque voluptates vero dolore veritatis repudiandae at.";

  const copyright = "© Copyright 2024, All Rights Reserved by Gestini LLC";

  return (
    <div className="footer--landing bg-[#FAFAFA] px-[100px] py-[100px] w-full flex flex-col">
      <div className="topfooter-landing px-[100px] border-b-1 pb-[50px] border-[#70C955] flex w-full justify-between">
        <div className="sectionlogofooter-landing w-full max-w-[365px] flex flex-col gap-[32px]">
          <img src={Gestini} className="w-[45px]" alt="Logo" />
          <p className="descriptionfooter-landing font-Figtree text-[#929AA7]">
            {description}
          </p>
          <div className="redesfooter-landing text-[25px] text-[#929AA7] flex gap-[20px]">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="columnfooter-landing flex gap-[110px]">
          <div className="colinfofooter-landing flex flex-col font-Figtree gap-5 text-[#929AA7]">
            <h6 className="font-[600]">Menú</h6>
            {menuItems.map((item, index) => (
              <a key={index} href={item.url}>
                <p>{item.text}</p>
              </a>
            ))}
          </div>
          <div className="colinfofooter-landing flex flex-col font-Figtree gap-5 text-[#929AA7]">
            <h6 className="font-[600]">Ayuda</h6>
            {helpItems.map((item, index) => (
              <Link key={index} to={item.url}>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
          <div className="colinfofooter-landing flex flex-col gap-5 font-Figtree text-[#929AA7]">
            <h6 className="font-[600]">Otros</h6>
            {otherItems.map((item, index) => (
              <Link key={index} to={item.url}>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="bottomfooter-landing w-full flex justify-center items-center text-[14px] text-[#929AA7] py-[40px]">
        {copyright}
      </div>
    </div>
  );
};

export default Footer;
