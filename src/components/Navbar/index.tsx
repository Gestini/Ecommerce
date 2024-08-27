import { useState } from "react";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const Index = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Header */}
      <div className="h-[70px] p-[5px] px-[20px] shadow-md flex justify-between items-center">
        <img
          src="https://cdn.discordapp.com/attachments/1277840522047656119/1277840553232437320/Capa_4.png?ex=66cea141&is=66cd4fc1&hm=be2057a0b0bae82afac739658e7b7a84147a2903baffdf406191c9a47cb2cad9&"
          alt="Logo"
        />
        <button onClick={toggleSidebar} className="w-[40px] relative h-[40px] flex justify-center items-center bg-[#a0db8e] rounded-full">
          <FaShoppingCart className="text-white" />
          <span className="absolute top-[-5px] right-[-5px] text-[12px] font-bold text-white bg-orange-500 rounded-full w-[20px] h-[20px] flex items-center justify-center">20</span>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed flex flex-col justify-between top-0 right-0 z-40 w-64 h-screen p-4 shadow-md overflow-y-auto bg-white transition-transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className=" p-[5px] pr-[20px] flex justify-between border-b border-gray-300 mb-2">
          Carrito
        </div>
        <button
          onClick={toggleSidebar}
          className="text-gray-400 mt-1 bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <ul className="space-y-1 font-medium h-full overflow-auto">
          <li>
            <a href="#" className="flex items-center justify-between p-1 text-gray-900 rounded-lg gap-2 ">
              <div className="flex justify-between items-center ">
                <div className="bg-gray-200 h-[40px] w-[40px] mr-2 rounded-md"></div>
                <div className="flex flex-col">
                  <span className="text-[14px]">Dashboard</span>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 flex items-center justify-center  rounded-full bg-gray-200">
                      <FaMinus className="text-[10px] text-gray-600" />
                    </div>
                    <span className="text-[14px]">x10</span>
                    <div className="w-4 h-4 flex items-center justify-center  rounded-full bg-gray-200">
                      <FaPlus className="text-[10px] text-gray-600" />
                    </div>
                  </div>
                </div>
              </div>
              <FaTrash className="text-[12px]" />
            </a>
          </li>
        </ul>

        <div className=" p-[5px] pr-[20px] flex justify-between border-t border-gray-300 mb-2">
          <span>
            Total
          </span>
          <span>
            $20000
          </span>
        </div>
        <div className="">
          <button className="flex items-center gap-2 p-2 bg-[#a0db8e] w-full mb-1 rounded-md text-white text-[16px] justify-center">Enviar con <FaWhatsapp /></button>
          <button className="block p-2 bg-[#a0db8e] w-full rounded-md text-white text-[16px]">Enviar pedido</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
