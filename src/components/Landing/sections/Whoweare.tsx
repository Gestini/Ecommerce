import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsAsterisk } from "react-icons/bs";
import "./Whoweare.scss";

const Whoweare = () => {
  const cards = [
    {
      icon: <BsAsterisk className="text-[#a6a6a6]" />,
      title: "Flexibilidad",
      description:
        "Gestiona tu proyecto, empresa independientemente del tipo de empresa, podrás administrar desde una startup hasta una distribuidora.",
    },
    {
      icon: <BsAsterisk className="text-[#a6a6a6]" />,
      title: "Flexibilidad",
      description:
        "Gestiona tu proyecto, empresa independientemente del tipo de empresa, podrás administrar desde una startup hasta una distribuidora.",
    },
    {
      icon: <BsAsterisk className="text-[#a6a6a6]" />,
      title: "Flexibilidad",
      description:
        "Gestiona tu proyecto, empresa independientemente del tipo de empresa, podrás administrar desde una startup hasta una distribuidora.",
    },
    {
      icon: <BsAsterisk className="text-[#a6a6a6]" />,
      title: "Flexibilidad",
      description:
        "Gestiona tu proyecto, empresa independientemente del tipo de empresa, podrás administrar desde una startup hasta una distribuidora.",
    },
    {
      icon: <BsAsterisk className="text-[#a6a6a6]" />,
      title: "Flexibilidad",
      description:
        "Gestiona tu proyecto, empresa independientemente del tipo de empresa, podrás administrar desde una startup hasta una distribuidora.",
    },
    {
      icon: <BsAsterisk className="text-[#a6a6a6]" />,
      title: "Flexibilidad",
      description:
        "Gestiona tu proyecto, empresa independientemente del tipo de empresa, podrás administrar desde una startup hasta una distribuidora.",
    },
    // Agrega más objetos de cartas aquí
  ];
  return (
    <div className="divcontainersection min-h-screen items-center  flex-col gap-[64px] mx-auto flex  bg-[#FAFAFA] ">
      <div className="section min-h-screen flex flex-col gap-[64px] w-full max-w-[80%]  mx-auto ]  ">
        <div className="titlesection w-full flex flex-col gap-[20px] justify-center items-center ">
          <div className="buttonsecttionname w-full justify-center flex">
            <button className=" flex gap-2 w-auto px-[10px] py-[2px] rounded-full  items-center text-[#a6a6a6] border-1 border-[#a6a6a6] ">
              <AiFillThunderbolt /> Caracteristicas
            </button>
          </div>
          <h2 className="titlesectionh2 text-center font-[700] text-[48px] ">
            Porque somos los <span className=" text-[#70C955] "> mejores!</span>
          </h2>
        </div>
        <div className="gridcontainer flex-grow grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-4 gap-y-[64px] ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="cardcaracterist mx-auto w-[350px] flex flex-col gap-4 p-4 rounded-lg px-[36px] py-[20px]  "
            >
              <div className="w-[60px] h-[60px] flex justify-center bg-[#E0EDFA] rounded-lg items-center">
                {card.icon}
              </div>
              <h5 className="titulocardgrid-landing text-[24px] text-[#70C955] font-bold">
                {card.title}
              </h5>
              <span className="cardescriptiongrid-landing text-[15px] text-gray-700">
                {card.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
