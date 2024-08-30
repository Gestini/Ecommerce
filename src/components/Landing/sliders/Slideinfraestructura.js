import { jsx as _jsx } from "react/jsx-runtime";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import Amazon from "../../../assets/Logos/Amazon.png";
import GCloud from "../../../assets/Logos/GCloud.png";
import Microsoft from "../../../assets/Logos/Microsoft.png";
import Meli from "../../../assets/Logos/Meli.png";
import Shopify from "../../../assets/Logos/Shopify.png";
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
const Slideinfraestructura = () => {
    const slideImages = [Amazon, Microsoft, Meli, GCloud, Shopify, Meli];
    return (_jsx(Swiper, { slidesPerView: 4, spaceBetween: 50, freeMode: true, pagination: false, loop: true, autoplay: {
            delay: 700,
            disableOnInteraction: false,
        }, breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            // when window width is >= 640px
            500: {
                slidesPerView: 3,
                spaceBetween: 100,
            },
            700: {
                slidesPerView: 4,
                spaceBetween: 100,
            },
            // when window width is >= 1024px
            1250: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        }, modules: [FreeMode, Pagination, Autoplay], className: "mySwiper w-[1200px] ", children: slideImages.map((src, index) => (_jsx(SwiperSlide, { className: "slideitemdiv flex justify-center items-center", children: _jsx("img", { src: src, className: "w-[150px]", alt: `Slide ${index + 1}` }) }, index))) }));
};
export default Slideinfraestructura;
