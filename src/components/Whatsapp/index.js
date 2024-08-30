import { jsx as _jsx } from "react/jsx-runtime";
import { FaWhatsapp } from 'react-icons/fa';
const WhatsApp = ({ telefono }) => {
    return (_jsx("div", { className: "fixed bottom-[10%] right-[7%]", children: _jsx("a", { className: "w-full cursor-default", href: `https://wa.me/${telefono}`, target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "flex items-center cursor-pointer justify-center w-[60px] h-[60px] rounded-full bg-green-500 text-white transform hover:scale-110 transition duration-500 ease-in-out", children: _jsx(FaWhatsapp, { size: 40 }) }) }) }));
};
export default WhatsApp;
