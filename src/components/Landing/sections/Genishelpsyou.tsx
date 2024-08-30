import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import "./Genishelpsyou.scss";
import { IoIosArrowForward } from "react-icons/io";

const Genishelpsyou = () => {
  return (
    <div className="divcontainersection min-h-screen items-center  flex-col gap-[64px] mx-auto  flex  bg-[#FAFAFA] ">
      <div className="section flex flex-col  w-full max-w-[80%] gap-[40px]  mx-auto ] ">
        <div className="titlesection justify-center items-center w-full flex flex-col gap-[20px] ">
          <div className="buttonsecttionname w-full justify-center flex">
            <button className=" flex gap-2 w-auto px-[10px] py-[2px] rounded-full  items-center text-[#a6a6a6] border-1 border-[#a6a6a6] ">
              <AiFillThunderbolt /> Genis
            </button>
          </div>
          <h2 className="titlesectionh2 titleproblemagenis genisayuda  font-[700]   text-center  ">
            ¿Problemas con tu empresa?
            <span className=" text-[#70C955] "> Genis</span> te ayuda
          </h2>
        </div>
        <div className="searchproblemgenis flex justify-center">
          <div className="barritasearch flex  w-full max-w-[723px] bg-[#E4E4E4] shadow-md rounded-2xl ">
            <input
              type="text"
              className=" bg-transparent outline-none px-[20px] h-full flex-grow "
              name=""
              id=""
            />
            <div className="iconosearhgenis w-[80px] flex h-full items-center ">
              <div className="boxiconsearch cursor-pointer w-[43px] h-[43px] bg-[#DBDBDB] rounded-lg flex justify-center items-center ">
                <IoIosArrowForward className=" text-[30px] text-[#16161663] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genishelpsyou;
