import React from "react";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";
import Gestini from "../../../assets/Logos/Gestini.png";
import { GestinyLogo } from "@/assets/Logo";

const Footer = () => {
  // Datos internos del componente
  const socialLinks = [
    { url: "https://www.instagram.com/gestiniok", icon: <AiFillInstagram /> },
    { url: "https://www.tiktok.com/@gestiniokk", icon: <AiFillTikTok /> },
  ];

  // const menuItems = [
  //   { text: "Herramientas", url: "#herramientas" },
  //   { text: "Caracteristicas", url: "#caracteristicas" },
  //   { text: "Modelos Empresariales", url: "#modelosempresariales" },
  //   { text: "Planer", url: "/planner" },
  // ];

  // const helpItems = [
  //   { text: "Ayuda", url: "/help" },
  //   { text: "Atención al cliente", url: "/customer-service" },
  //   { text: "Términos y condiciones", url: "/terms" },
  //   { text: "Política de privacidad", url: "/privacy" },
  // ];

  // const otherItems = [
  //   { text: "Contacto", url: "/contact" },
  //   { text: "Sobre nosotros", url: "/about" },
  //   { text: "Blog", url: "/blog" },
  //   { text: "Carreras", url: "/careers" },
  // ];

  const description =
    "Somos expertos en desarrollo de software, enfocados en transformar cómo emprendedores y pymes gestionan sus negocios. Ofrecemos soluciones innovadoras para optimizar procesos y fomentar el crecimiento. Nos posicionamos como aliados estratégicos en LATAM, brindando herramientas avanzadas que permiten a las empresas escalar y destacar en un mercado competitivo, siempre pensando en el futuro.";

  const copyright ='© Copyright 2024, Todos los derechos reservados Gestini LLC';

  return (
    <div className="bg-[#FAFAFA] px-[70px] py-[70px] w-full flex flex-col border-t border-gray-100">
      <div className=" border-b-1 pb-[44px] border-[#70C955] flex w-full justify-center">
        <div className="w-full items-center flex flex-col gap-[32px] max-w-[1200px]">
          <GestinyLogo />
          <p className="font-Figtree text-[#929AA7] text-center">
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
      </div>
      <div className="bottomfooter-landing w-full flex justify-center items-center text-[14px] text-[#929AA7] py-[44px]">
        {copyright}
      </div>
    </div>
  );
};

export default Footer;
