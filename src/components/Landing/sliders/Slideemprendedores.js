import { jsx as _jsx } from "react/jsx-runtime";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slideemprendedores = () => {
    const slideItems = [
        "Inteligencia Artificial (genis)",
        "Gestion de depositos",
        "Recursos humanos",
        "Punto de Venta (POS)",
        "Gestion de producto",
    ];
    return (_jsx(Swiper, { slidesPerView: 4, spaceBetween: 0, freeMode: true, pagination: false, loop: true, autoplay: {
            delay: 700,
            disableOnInteraction: false,
        }, breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            // when window width is >= 480px
            // when window width is >= 640px
            500: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
            700: {
                slidesPerView: 4,
                spaceBetween: 100,
            },
            // when window width is >= 1024px
            1250: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            // when window width is >= 1440px
        }, modules: [FreeMode, Pagination, Autoplay], className: "mySwipertop w-[1000px] ", children: slideItems.map((item, index) => (_jsx(SwiperSlide, { className: "slideitemdiv flex justify-center items-center", children: _jsx("div", { className: "slideitem text-[13px] rounded-3xl font-[600] border-1 border-[#a0db8e69] px-[30px] py-[3px] text-[#5ABD3C]", children: item }) }, index))) }));
};
export default Slideemprendedores;
