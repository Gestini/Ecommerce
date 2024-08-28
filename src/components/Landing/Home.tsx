import React from "react";
import Cuadrado from "../../assets/Herosection.png";
import Mastiempo from "../../assets/mastiempo.png";
import Amazon from "../../assets/Logos/Amazon.png";
import GCloud from "../../assets/Logos/GCloud.png";
import Microsoft from "../../assets/Logos/Microsoft.png";
import Meli from "../../assets/Logos/Meli.png";
import Shopify from "../../assets/Logos/Shopify.png";
import { FaMagic } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

import "./Home.scss";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Home = () => {
  return (
    <div className="home-landing relative w-full flex justify-center items-center h-screen pt-[68px]">
      <div className="containermiddle-landing mt-[-200px] flex flex-col gap-2 ">
        <div className="Emprendedoresempresarios-landing flex flex-col gap-6">
          <h3 className=" text-[#b9b9b9] font-[600] text-center ">
            PARA EMPRENDEDORES Y EMPRESARIOS
          </h3>
          <Swiper
            slidesPerView={4}
            spaceBetween={0}
            freeMode={true}
            pagination={false}
            loop={true}
            autoplay={{
              delay: 700,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 480px

              // when window width is >= 640px
              500: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              700: {
                slidesPerView: 4,
                spaceBetween: 100,
              },
              // when window width is >= 1024px
              1250: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              // when window width is >= 1440px
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwipertop w-[1000px] "
          >
            <SwiperSlide className="slideitemdiv flex justify-center items-center ">
              <div className="slideitem  text-[13px] rounded-3xl font-[600] border-1 border-[#a0db8e52] px-[30px] py-[3px] text-[#5ABD3C]">
                Inteligencia Artificial (genis)
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide className="slideitemdiv flex justify-center items-center ">
              <div className="slideitem  text-[13px] rounded-3xl font-[600] border-1 border-[#a0db8e69] px-[30px] py-[3px] text-[#5ABD3C]">
                Gestion de depositos
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide className="slideitemdiv flex justify-center items-center ">
              <div className="slideitem  text-[13px] rounded-3xl font-[600] border-1 border-[#a0db8e69] px-[30px] py-[3px] text-[#5ABD3C]">
                Recursos humanos
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide className="slideitemdiv flex justify-center items-center ">
              <div className="slideitem  text-[13px] rounded-3xl font-[600] border-1 border-[#a0db8e69] px-[30px] py-[3px] text-[#5ABD3C]">
                Punto de Venta (POS)
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide className="slideitemdiv flex justify-center items-center ">
              <div className="slideitem  text-[13px] rounded-3xl font-[600] border-1 border-[#a0db8e69] px-[30px] py-[3px] text-[#5ABD3C]">
                Gestion de producto
              </div>{" "}
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="titlemiddle-landing flex justify-center">
          <img src={Mastiempo} className="mastimepologo w-[1000px] " alt="" />
        </div>
        <div className="bottomiddle-landing flex flex-col gap-4">
          <div className="rowbotonera items-center flex justify-center  gap-5 ">
            <button className="empiezagratis flex gap-2 bg-[#A0DB8E] font-[600] items-center px-[15px] py-[10px] rounded-lg border-[#ccc9c8] border-4 ">
              <span>Empieza gratis</span>
              <FaMagic />
            </button>
            <button className="descargawindow flex gap-2  font-[600] items-center px-[20px]  text-[#969996] rounded-lg border-[#969996] border-2 ">
              <span>Descargar para Windows</span>
            </button>
          </div>
          <h4 className="descriptionhome-landing text-center text-[#969996] font-[600]  text-[20px] ">
            Empieza gratis y gestiona tu empresa con procesos automatizados y
            faciles.
          </h4>
        </div>
      </div>
      <div className="bottomcontainer-landing absolute bottom-[50px] gap-6 flex flex-col justify-center items-center ">
        <div className="infoslider-landing flex gap-2 text-[#969996] items-center font-[500] ">
          <IoMdArrowDropright />
          <span>Infraestructura Segura e Innovadora</span>
        </div>
        <div className="sliderinfraestructura-landing ">
          <Swiper
            slidesPerView={4}
            spaceBetween={50}
            freeMode={true}
            pagination={false}
            loop={true}
            autoplay={{
              delay: 700,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
              },

              // when window width is >= 640px
              500: {
                slidesPerView: 3,
                spaceBetween: 100,
              },
              700: {
                slidesPerView: 4,
                spaceBetween: 100,
              },
              // when window width is >= 1024px
              1250: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper w-[1200px] "
          >
            <SwiperSlide className="slideitemdiv flex justify-center items-center ">
              <img src={Amazon} className=" w-[150px]  " alt="" />
            </SwiperSlide>
            <SwiperSlide className="slideitemdiv flex justify-center items-center ">
              <img src={Microsoft} className=" w-[150px]  " alt="" />
            </SwiperSlide>
            <SwiperSlide className="slideitemdiv flex justify-center items-center ">
              <img src={Meli} className=" w-[150px]  " alt="" />
            </SwiperSlide>
            <SwiperSlide className="slideitemdiv flex justify-center items-center ">
              <img src={GCloud} className=" w-[150px]  " alt="" />
            </SwiperSlide>
            <SwiperSlide className="slideitemdiv flex justify-center items-center ">
              <img src={Shopify} className=" w-[150px]  " alt="" />
            </SwiperSlide>
            <SwiperSlide className="slideitemdiv flex justify-center items-center ">
              <img src={Meli} className=" w-[150px]  " alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
