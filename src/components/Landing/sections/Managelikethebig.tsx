import React from "react";
import "./_Mangagelikethebig.scss";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Managelikethebig = () => {
  return (
    <div className="divcontainersection min-h-screen items-center  flex-col gap-[64px] mx-auto  flex  bg-[#FAFAFA] ">
      <div className="section flex flex-col min-h-screen w-full max-w-[100%] gap-[40px]  mx-auto ] ">
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
          
          className="mySwiper flex-grow flex w-full items-center justify-center  "
        >
          <SwiperSlide className="  flex-grow  flex justify-center items-center ">
            {" "}
            <div className="gridboxes--landing w-full justify-center h-[400px] flex gap-4 max-w-[100%]  ">
              <div className="boxesizq flex  gap-4 w-1/2">
                <div className="boxizq-landing w-full h-full bg-[#D9D9D9] rounded-3xl"></div>
                <div className="boxder-landing w-full h-full  bg-[#D9D9D9] rounded-3xl"></div>
              </div>
              <div className="boxesmiddle--landing flex flex-col h-full  gap-4 w-1/5">
                <div className="boxtop-landing w-full flex-grow bg-[#D9D9D9] rounded-3xl"></div>
                <div className="boxtop-landing w-full flex-grow bg-[#D9D9D9] rounded-3xl"></div>
              </div>
              <div className="boxesder flex  gap-4 w-1/2">
                <div className="boxizq-landing w-full max h-full  bg-[#D9D9D9] rounded-3xl"></div>
                <div className="boxder-landing w-full h-full  bg-[#D9D9D9] rounded-3xl"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" ">
            {" "}
            <div className="gridboxes--landing w-full justify-center h-[400px] flex gap-4 max-w-[100%]  ">
              <div className="boxesizq flex  gap-4 w-1/2">
                <div className="boxizq-landing w-full h-full bg-[#D9D9D9] rounded-3xl"></div>
                <div className="boxder-landing w-full h-full  bg-[#D9D9D9] rounded-3xl"></div>
              </div>
              <div className="boxesmiddle--landing flex flex-col h-full  gap-4 w-1/5">
                <div className="boxtop-landing w-full flex-grow bg-[#D9D9D9] rounded-3xl"></div>
                <div className="boxtop-landing w-full flex-grow bg-[#D9D9D9] rounded-3xl"></div>
              </div>
              <div className="boxesder flex  gap-4 w-1/2">
                <div className="boxizq-landing w-full max h-full  bg-[#D9D9D9] rounded-3xl"></div>
                <div className="boxder-landing w-full h-full  bg-[#D9D9D9] rounded-3xl"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Managelikethebig;
