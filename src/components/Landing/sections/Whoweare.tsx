import { AiFillThunderbolt } from "react-icons/ai";
import {
  MdAttachMoney,
  MdBusiness,
  MdCloud,
  MdGroup,
  MdInventory,
  MdStore,
} from "react-icons/md";
import "./Whoweare.scss";

const Whoweare = () => {
  const cards = [
    {
      icon: <MdBusiness className="text-gray-500 text-[30px]" />,
      title: "Empresas y Sucursales",
      description:
        "Administra varias empresas y sucursales desde una sola cuenta con cambio rápido entre ellas.",
    },
    {
      icon: <MdStore className="text-gray-500 text-[30px]" />,
      title: "Puntos de Venta",
      description:
        "Crea y gestiona puntos de venta personalizados para cada sucursal, optimizando tus operaciones.",
    },
    {
      icon: <MdCloud className="text-gray-500 text-[30px]" />,
      title: "Gestión flexible",
      description:
        "Administra tu negocio desde cualquier lugar con toda la información almacenada de manera segura en la nube.",
    },
    {
      icon: <MdGroup className="text-gray-500 text-[30px]" />,
      title: "Multisesiones Locales",
      description:
        "Cambia entre sesiones de forma rápida y segura en una sola máquina, ideal para múltiples usuarios.",
    },
    {
      icon: <MdInventory className="text-gray-500 text-[30px]" />,
      title: "Stock y Almacenes",
      description:
        "Controla inventarios en tiempo real y gestiona múltiples almacenes de manera eficiente.",
    },
    {
      icon: <MdAttachMoney className="text-gray-500 text-[30px]" />,
      title: "Facturación y Ventas",
      description:
        "Automatiza facturación y maneja ventas, generando informes financieros precisos.",
    },
  ];
  return (
    <div className="divcontainersection min-h-screen items-center  flex-col gap-[64px] mx-auto flex  bg-[#FAFAFA] ">
      <div
        id="caracteristicas"
        className="section min-h-screen flex flex-col gap-[40px] w-full max-w-[80%]  mx-auto ]  "
      >
        <div className="titlesection w-full flex flex-col gap-[20px] justify-center items-center ">
          <div className="buttonsecttionname w-full justify-center flex">
            <button className=" flex gap-2 w-auto px-[10px] py-[2px] rounded-full  items-center text-[#a6a6a6] border-1 border-[#a6a6a6] blurAnimation">
              <AiFillThunderbolt /> Caracteristicas
            </button>
          </div>
          <h2 className="titlesectionh2 text-center font-[700] text-[48px] blurAnimation">
            Porque somos los <span className=" text-[#70C955] "> mejores!</span>
          </h2>
        </div>
        <div className="gridcontainer flex-grow grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-4 gap-y-[64px] ">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`apearanimation cardcaracterist mx-auto w-[350px] flex flex-col gap-4 p-4 rounded-lg px-[36px] py-[20px]`}
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
