import React from "react";
import "./_Mangagelikethebig.scss";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi";
// import { GoArrowDownLeft } from "react-icons/go";
import { BiSolidContact } from "react-icons/bi";
import { HiDocumentReport } from "react-icons/hi";
import { FaShoppingBag } from "react-icons/fa";
import { GoFileDirectoryFill } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownLeft } from "react-icons/go";
import Ingresos from "../../../assets/imagenes/Gridtest/ingresos.webp";
import Gastos from "../../../assets/imagenes/Gridtest/gastos.webp";
import Contactos from "../../../assets/imagenes/Gridtest/contactos.webp";
import Informes from "../../../assets/imagenes/Gridtest/informes.webp";
import Ecommerce from "../../../assets/imagenes/Gridtest/ecommerce.webp";
import Gestor from "../../../assets/imagenes/Gridtest/gestordocus.webp";
import Exportaciondato from "../../../assets/imagenes/Gridtest/exportacion.webp";
import Gruposdetrabajo from "../../../assets/imagenes/Gridtest/grupostrabajo.webp";
import Analisisdatos from "../../../assets/imagenes/Gridtest/reportesestadisticas.webp";
import Chatentiemporeal from "../../../assets/imagenes/Gridtest/chatreal.webp";
import Contabilidad from "../../../assets/imagenes/Gridtest/contabilidad.webp";
import Genisia from "../../../assets/imagenes/Gridtest/genisia.webp";
import Gestiondeposito from "../../../assets/imagenes/Gridtest/Gestiondedepositos.webp";
import Gestionsucursales from "../../../assets/imagenes/Gridtest/sucursales.webp";
import Gestionusuarios from "../../../assets/imagenes/Gridtest/gestionusuarios.webp";
import Lectordocus from "../../../assets/imagenes/Gridtest/lectordocus.webp";
import Multiempresarial from "../../../assets/imagenes/Gridtest/multiempresarial.webp";
import Puntodeventa from "../../../assets/imagenes/Gridtest/puntodeventa.webp";
import Reportesyestadisticas from "../../../assets/imagenes/Gridtest/reportesestadisticas.webp";
import RRHH from "../../../assets/imagenes/Grid/rrhh.png";
import Sdeguridadyproteccion from "../../../assets/imagenes/Gridtest/seguridadyprivacidad.webp";
import Ventaa from "../../../assets/imagenes/Gridtest/ventas.webp";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const slidesData = [
  {
    boxesizq: [
      {
        title: "Gastos",
        subtitle: "Free",
        icon: GoArrowUpRight,
        src: RRHH,
      },
      {
        title: "Gastos",
        subtitle: "Free",
        icon: GoArrowDownLeft,
        src: Puntodeventa,
      },
    ],
    boxesmiddle: [
      {
        title: "Contactos",
        subtitle: "Free",
        icon: BiSolidContact,
        src: Gruposdetrabajo,
      },
      {
        title: "Informes",
        subtitle: "Free",
        icon: HiDocumentReport,
        src: Exportaciondato,
      },
    ],
    boxesder: [
      {
        title: "Ecommerce",
        subtitle: "App de pago",
        icon: FaShoppingBag,
        src: Gestiondeposito,
      },
      {
        title: "Gestor de documentos",
        subtitle: "App de pago",
        icon: GoFileDirectoryFill,
        src: Ventaa,
      },
    ],
  },
  {
    boxesizq: [
      {
        title: "Gastos",
        subtitle: "Free",
        icon: GoArrowUpRight,
        src: Ingresos,
      },
      {
        title: "Gastos",
        subtitle: "Free",
        icon: GoArrowDownLeft,
        src: Gastos,
      },
    ],
    boxesmiddle: [
      {
        title: "Contactos",
        subtitle: "Free",
        icon: BiSolidContact,
        src: Contactos,
      },
      {
        title: "Informes",
        subtitle: "Free",
        icon: HiDocumentReport,
        src: Informes,
      },
    ],
    boxesder: [
      {
        title: "Ecommerce",
        subtitle: "App de pago",
        icon: FaShoppingBag,
        src: Ecommerce,
      },
      {
        title: "Gestor de documentos",
        subtitle: "App de pago",
        icon: GoFileDirectoryFill,
        src: Gestor,
      },
    ],
  },
  {
    boxesizq: [
      {
        title: "Gastos",
        subtitle: "Free",
        icon: GoArrowUpRight,
        src: Genisia,
      },
      {
        title: "Gastos",
        subtitle: "Free",
        icon: GoArrowDownLeft,
        src: Lectordocus,
      },
    ],
    boxesmiddle: [
      {
        title: "Contactos",
        subtitle: "Free",
        icon: BiSolidContact,
        src: Contabilidad,
      },
      {
        title: "Informes",
        subtitle: "Free",
        icon: HiDocumentReport,
        src: Gestionusuarios,
      },
    ],
    boxesder: [
      {
        title: "Ecommerce",
        subtitle: "App de pago",
        icon: FaShoppingBag,
        src: Chatentiemporeal,
      },
      {
        title: "Gestor de documentos",
        subtitle: "App de pago",
        icon: GoFileDirectoryFill,
        src: Analisisdatos,
      },
    ],
  },
];

const Managelikethebig = () => {
  return (
    <div className="divcontainersection min-h-screen items-center  flex-col gap-[64px] mx-auto  flex  bg-[#FAFAFA] ">
      <div
        id="herramientas"
        className="section flex flex-col min-h-screen w-full max-w-[100%] gap-[40px]  mx-auto ] "
      >
        <div className="titlesection justify-center items-center w-full flex flex-col gap-[20px] ">
          <div className="buttonsecttionname w-full justify-center flex">
            <button className=" flex gap-2 w-auto px-[10px] py-[2px] rounded-full  items-center text-[#a6a6a6] border-1 border-[#a6a6a6] blurAnimation">
              <AiFillThunderbolt /> Herramientas
            </button>
          </div>
          <h2 className="titlesectionh2 titleherramientas genisayuda font-[700] text-center blurAnimation">
            Gestiona como los grandes con todas
            <span className=" text-[#70C955] "> las mejores herramientas</span>
          </h2>
        </div>

        <Swiper
          navigation={true}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="mySwiper flex-grow flex w-full items-center justify-center blurAnimation"
        >
          {slidesData.map((slide, slideIndex) => (
            <SwiperSlide
              key={slideIndex}
              className="flex-grow flex justify-center items-center"
            >
              <div className="gridboxes--landing w-full justify-center h-[400px] flex gap-4 max-w-[100%]">
                <div className="boxesizq flex gap-4 w-1/2">
                  {slide.boxesizq.map((box, index) => (
                    <div
                      key={index}
                      className="boxizq-landing relative w-full h-full flex flex-col justify-center bg-[#363636] rounded-3xl"
                    >
                      <img
                        src={box.src}
                        alt="Ingresos"
                        className="absolute inset-0 w-full h-full object-cover bg-center rounded-3xl"
                      />
                    </div>
                  ))}
                </div>
                <div className="boxesmiddle--landing flex flex-col h-full gap-4 w-1/5">
                  {slide.boxesmiddle.map((box, index) => (
                    <div
                      key={index}
                      className="boxtop-landing w-full relative flex flex-col justify-center flex-grow bg-[#D9D9D9] rounded-3xl"
                    >
                      <img
                        src={box.src}
                        alt="Ingresos"
                        className="absolute inset-0 w-full h-full object-cover bg-center rounded-3xl"
                      />
                    </div>
                  ))}
                </div>
                <div className="boxesder flex gap-4 w-1/2">
                  {slide.boxesder.map((box, index) => (
                    <div
                      key={index}
                      className="boxder-landing relative flex flex-col justify-center w-full h-full bg-[#D9D9D9] rounded-3xl"
                    >
                      <img
                        src={box.src}
                        alt="Ingresos"
                        className="absolute inset-0 w-full h-full object-cover bg-center rounded-3xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Managelikethebig;
