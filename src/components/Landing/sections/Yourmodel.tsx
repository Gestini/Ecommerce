import { FC, ReactNode, useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { HiMiniUser, HiMiniUserGroup, HiMiniUsers } from "react-icons/hi2";
import "./Yourmodel.scss"; // Asegúrate de importar el archivo SCSS aquí

interface CardType {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
}

const cardData: CardType[] = [
  {
    id: 1,
    title: "Emprendedores",
    description:
      "Arrancá gratis y sin vueltas. 😎 Organiza tu inventario, controlá tus ventas, emití facturas, invitá colaboradores a tu empresa, registrá tu punto de venta y mucho más. 🚀",
    icon: <HiMiniUser className="text-[#0000005d] text-[24px]" />,
    image: 'https://gestini.nyc3.cdn.digitaloceanspaces.com/UTILS/unitType/Group%201000001648%20(1).png',
  },
  {
    id: 2,
    title: "Pymes",
    description:
      "Optimiza tu Pyme con un amplio inventario y múltiples sucursales. 📊 Disfruta de facturación ilimitada, múltiples puntos de venta y mejora tu empresa con IA.🤓",
    icon: <HiMiniUsers className="text-[#0000005d] text-[24px]" />,
    image: 'https://gestini.nyc3.cdn.digitaloceanspaces.com/UTILS/unitType/Group%201000001652%20(1).png',
  },
  {
    id: 3,
    title: "Empresas",
    description:
      "Gestioná operaciones complejas de forma sencilla. 😊 Administra hasta 100,000 productos, múltiples almacenes y sucursales, maximizando la eficiencia con IA. 💪",
    icon: <HiMiniUserGroup className="text-[#0000005d] text-[24px]" />,
    image: 'https://gestini.nyc3.cdn.digitaloceanspaces.com/UTILS/unitType/Group%201000001654%20(1).png',
  },
];

interface YourmodelProps {
  openModal: () => void;
}

const Yourmodel: FC<YourmodelProps> = ({ openModal }) => {
  const [selectedCard, setSelectedCard] = useState<number>(1);

  const selectedCardData = cardData.find((card) => card.id === selectedCard);

  console.log(selectedCard)

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
            <div className="imagerigthtypebussines zoomAnimation zoomAnimationInmediate">
              {selectedCardData && selectedCard == 1 && (
                <img className={`w-full zoomAnimationInmediate i${selectedCard}`} src={selectedCardData.image} alt={selectedCardData.title} />
              )}
              {selectedCardData && selectedCard == 2 && (
                <img className={`w-full zoomAnimationInmediate i${selectedCard}`} src={selectedCardData.image} alt={selectedCardData.title} />
              )}
              {selectedCardData && selectedCard == 3 && (
                <img className={`w-full zoomAnimationInmediate i${selectedCard}`} src={selectedCardData.image} alt={selectedCardData.title} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yourmodel;
