import React from "react";
import "./Doitwith.scss";
import { AiFillThunderbolt } from "react-icons/ai";

const Doitwithgenis = () => {
  return (
    <>

      <div className="section titlesection w-full flex flex-col gap-[20px] justify-center items-center bg-[#FAFAFA]">
        <div className="buttonsecttionname w-full justify-center flex">
          <button className=" flex gap-2 w-auto px-[10px] py-[2px] rounded-full  items-center text-[#a6a6a6] border-1 border-[#a6a6a6] blurAnimation">
            <AiFillThunderbolt /> Automatización
          </button>
        </div>
        <h2 className="titlesectionh2 text-center font-[700] text-[48px] blurAnimation">
          Automatiza tu negocio con<span className=" text-[#70C955] "> Intelgencia artificial</span>
        </h2>
      </div>
      <div className=" bg-[#FAFAFA] h-[50vh] flex justify-center items-center ">
        <div className="doitwith-genis w-[80%] flex justify-center items-center text-[200px] font-[600] text-[#00000027] ">
          <p className="blurAnimation">
            Hazlo con <span className="text-[#70C955] ">Genis</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Doitwithgenis;
