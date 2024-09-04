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
import Ingresos from "../../../assets/imagenes/Grid/Ingresos.png";
import Gastos from "../../../assets/imagenes/Grid/Gastos.png";
import Contactos from "../../../assets/imagenes/Grid/Contactos.png";
import Informes from "../../../assets/imagenes/Grid/Informes.png";
import Ecommerce from "../../../assets/imagenes/Grid/Ecommerce.png";
import Gestor from "../../../assets/imagenes/Grid/Gestor.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const slidesData = [
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
            <button className=" flex gap-2 w-auto px-[10px] py-[2px] rounded-full  items-center text-[#a6a6a6] border-1 border-[#a6a6a6] ">
              <AiFillThunderbolt /> Herramientas
            </button>
          </div>
          <h2 className="titlesectionh2 titleherramientas genisayuda  font-[700]   text-center  ">
            Gestiona como los grandes con todas
            <span className=" text-[#70C955] "> las mejores herramientas</span>
          </h2>
        </div>

        <Swiper
          navigation={true}
          spaceBetween={30}
          modules={[Navigation]}
          className="mySwiper flex-grow flex w-full items-center justify-center"
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
