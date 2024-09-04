import React, { useState, FC, ReactNode } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { HiMiniUser, HiMiniUsers, HiMiniUserGroup } from "react-icons/hi2";
import Gain from "../../../assets/imagenes/gains.png";
import "./Yourmodel.scss"; // Asegúrate de importar el archivo SCSS aquí

interface CardType {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const cardData: CardType[] = [
  {
    id: 1,
    title: "Emprendedores",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia amet sed numquam deleniti dolores explicabo iste vel, provident fugiat quas.",
    icon: <HiMiniUser className="text-[#0000005d] text-[24px]" />,
  },
  {
    id: 2,
    title: "Pymes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia amet sed numquam deleniti dolores explicabo iste vel, provident fugiat quas.",
    icon: <HiMiniUsers className="text-[#0000005d] text-[24px]" />,
  },
  {
    id: 3,
    title: "Empresas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia amet sed numquam deleniti dolores explicabo iste vel, provident fugiat quas.",
    icon: <HiMiniUserGroup className="text-[#0000005d] text-[24px]" />,
  },
];

interface YourmodelProps {
  openModal: () => void;
}
const Yourmodel: FC<YourmodelProps> = ({ openModal }) => {
  const [selectedCard, setSelectedCard] = useState<number>(1);

  return (
    <div className="divcontainersection min-h-screen items-center flex-col gap-[64px] mx-auto flex bg-[#FAFAFA]">
      <div
        id="modelosempresariales"
        className="section flex flex-col gap-[40px] w-full min-h-screen max-w-[80%] mx-auto"
      >
        <div className="titlesection w-full flex flex-col gap-[20px] justify-center items-start">
          <div className="buttonsecttionname w-full justify-center flex">
            <button className="flex gap-2 w-auto px-[10px] py-[2px] rounded-full items-center text-[#a6a6a6] border-1 border-[#a6a6a6] blurAnimation">
              <AiFillThunderbolt /> Modelo Empresarial
            </button>
          </div>
          <h2 className="titlesectionh2 nosadaptamostext text-start font-[700] text-[48px] blurAnimation">
            No importa tu modelo de negocio,{" "}
            <span className="text-[#70C955]">nos adaptamos!</span>
          </h2>
        </div>
        <div className="carttypesbussines flex-grow max-h-[650px] flex w-full justify-between">
          <div className="leftcardstypescontainer w-[50%] flex flex-col justify-between">
            {cardData.map((card) => (
              <div
                key={card.id}
                className={`cardtypesbussines w-full min-w-[350px] max-w-[600px] apearanimation border-2 ${selectedCard === card.id
                  ? "border-[#70C955] selected-card animate-card"
                  : "border-transparent"
                  } gap-3 rounded-3xl p-5 flex flex-col cursor-pointer`}
                onClick={() => setSelectedCard(card.id)}
              >
                <div className="titlecardtypebussines w-full gap-4 flex items-center">
                  {card.icon}
                  <span className="texttitpletypebussines font-Figtree font-[600] text-[24px]">
                    {card.title}
                  </span>
                </div>
                <p className="textdescriptiontypebussines text-[#0000005d] font-Figtree font-[500]">
                  {card.description}
                </p>
              </div>
            ))}
            <button
              onClick={openModal}
              className="buttontypesbussines"
            >
              Empieza Gratis
              <div className="shine-effect"></div>
            </button>


          </div>
          <div className="rigthtypescontainer flex justify-center w-[50%]">
            <div className="imagerigthtypebussines zoomAnimation">
              <img src={Gain} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yourmodel;
