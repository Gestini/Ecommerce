import React from "react";
import { MdMenu } from "react-icons/md";
import "./Navbar.scss";
import { GestinyLogo } from "../../assets/Logo";

const Navbar = ({ openModal }: any) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar--landing flex w-[100%] animation ${isScrolled ? 'navbarWrapper' : 'bg-[#fbfbfb]'} z-20 justify-center mx-auto gap-4 items-center p-[15px] sticky top-0 left-0 `}>
        <div className="flex justify-between w-full items-center max-w-[80%]">
          <MdMenu className=" sm:hidden flex  text-[35px]" />
          <div className="izq-navbar--landing flex ">
            <div className="logo--landing">
              <GestinyLogo />
            </div>
          </div>
          <div className="hidden sm:flex items-center justify-between h-full gap-[14px] ">
            <button
              onClick={openModal}
              className='block text-[rgba(10,11,10,0.4)] px-[20px] font-medium py-[10px]'
            >
              Iniciar Sesion
            </button>
            <button
              onClick={openModal}
              className="buttontypesbussines"
            >
              Empieza gratis
              <div className="shine-effect"></div>
            </button>
          </div>
        </div>
      </div >
    </>

  );
};

export default Navbar;
