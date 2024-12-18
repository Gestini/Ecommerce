import Imagenes from "@/assets/Images";
import { GiStarSwirl } from "react-icons/gi";
import { IoMdArrowDropright } from "react-icons/io";
import "./Home.scss";
import SliderEmprendedores from "./sliders/SliderEmprendedores";
import Carousel from "./sliders/Slidertools";
import Logo from "../../assets/Logos/Gestinilogo.webp";

const Home = ({ openModal }: any) => {
  const imageList = [
    {
      src: "supplier1",
      height: "100",
      width: "250",
      alt: "Image 1",
    },
    {
      src: "supplier2",
      height: "100",
      width: "200",
      alt: "Image 2",
    },
    {
      src: "supplier3",
      height: "100",
      width: "200",
      alt: "Image 3",
    },
    {
      src: "supplier4",
      height: "100",
      width: "200",
      alt: "Image 3",
    },
    {
      src: "supplier5",
      height: "100",
      width: "200",
      alt: "Image 3",
    },
    {
      src: "supplier7",
      height: "100",
      width: "200",
      alt: "Image 3",
    },
  ];

  const items = [
    "Inteligencia artificial",
    "Recursos humanos",
    "Puntos de venta (POS)",
    "Gestion de productos",
  ];

  return (
    <div className="home-landing relative w-full flex justify-center items-center min-h-screen">
      <div className="containermiddle-landing mt-[-200px] flex flex-col gap-8 z-10">
        <div className="Emprendedoresempresarios-landing flex flex-col gap-8">
          <h3 className="h3emprendedores text-[#b9b9b9] font-[500] text-center ">
            PARA EMPRENDEDORES Y EMPRESARIOS
          </h3>
        </div>
        <Carousel items={items} />
        <div className="titlemiddle-landing flex justify-center select-none">
          <img
            src={Logo}
            className="mastimepologo w-[1000px] select-none"
            alt="gestini"
          />
        </div>
        <div className="bottomiddle-landing flex flex-col gap-6">
          <div className="rowbotonera items-center flex justify-center  gap-5">
            <button className="empiezagratis flex gap-2 bg-[#A0DB8E] font-[600] items-center px-[15px] py-[10px] rounded-lg border-[#ccc9c8] border-4 ">
              <span onClick={openModal}>Empieza gratis</span>
              <GiStarSwirl />
            </button>
            <button
              onClick={openModal}
              className="descargawindow flex gap-2  font-[600] items-center px-[20px] py-[8px]  text-[#969996] rounded-lg border-[#969996] border-2 "
            >
              <span>Descargar para Windows</span>
            </button>
          </div>
          <h4 className="descriptionhome-landing text-center text-[#969996] font-[500]  text-[20px]">
            Empieza gratis y gestiona tu empresa con procesos automatizados y
            faciles.
          </h4>
        </div>
      </div>
      <div className="bottomcontainer-landing absolute bottom-[50px] gap-5 flex flex-col justify-center items-center ">
        <div className="infoslider-landing flex gap-2 text-[#969996] items-center font-[500] ">
          <IoMdArrowDropright />
          <span>Infraestructura Segura e Innovadora</span>
        </div>
        <div className="sliderinfraestructura-landing">
          <SliderEmprendedores images={imageList} />
        </div>
      </div>
    </div>
  );
};

export default Home;
