import React from "react";
import "./Herosection.scss";

const Herosection = () => {
  return (
    <div className="hero__main-section mb-4">
     <div className="bg-c-primary-variant-1 h-[45vh] bg-cover bg-center bg-[url('https://cdn.discordapp.com/attachments/1277840522047656119/1278154370726367242/header.png?ex=66cfc584&is=66ce7404&hm=79ecfb9255679933bba922db0a5a626a72f6469fb83eeb3a175ff433c50fdd94&')] w-full flex flex-col justify-center items-center gap-5">
        <div className="title__section-hero flex flex-col justify-center items-center ">
          <div className="title__hero flex text-[2em] text-[white] font-[600] ">
            TecnoPyme
          </div>
          <div className="description__hero text-[20px] text-gray-100">
            Tecnología de vanguardia
          </div>
        </div>
        <div className="input__section-hero max-w-[600px] w-full h-[60px] bg-white rounded-md flex ">
          <div className="search__input-hero h-full flex-grow ">
            <input
              type="text"
              placeholder="Buscar..."
              className="h-full text-[16px] w-full p-3 outline-none rounded-lg text-gray-600  "
            />
          </div>
          <div className="action__box-hero w-[150px] flex justify-center items-center gap-3 p-3 border-l-2">
            <button className="bg-c-primary-variant-1 h-full w-full text-white font-[500] rounded-lg hover:bg-c-primary-variant-2 transition duration-300">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
