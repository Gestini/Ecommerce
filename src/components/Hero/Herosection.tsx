import React from "react";
import "./Herosection.scss";

const Herosection = () => {
  return (
    <div className="hero__section h-[45vh] bg-blue-500 w-full flex flex-col justify-center items-center gap-5  ">
      <div className="title__section-hero flex flex-col justify-center items-center ">
        <div className="title__hero flex text-[2em] text-[white] font-[600] ">
          El Electricista
        </div>
        <div className="description__hero text-white text-[20px] text-gray-300 ">
          Un local, como pocos
        </div>
      </div>
      <div className="input__section-hero max-w-[1000px] w-full h-[60px] bg-white rounded-md flex ">
        <div className="search__input-hero h-full flex-grow ">
            <input type="text" className=" h-full w-full p-3 outline-none text-gray-600  " />
        </div>
        <div className="action__box-hero w-[200px] flex justify-center items-center gap-3 p-3 "><div className="ASD">ASD</div> <div className="ASD">ASD</div> </div>
      </div>
    </div>
  );
};

export default Herosection;
