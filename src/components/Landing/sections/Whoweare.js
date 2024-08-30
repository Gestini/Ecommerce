import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsAsterisk } from "react-icons/bs";
import "./Whoweare.scss";
const Whoweare = () => {
    const cards = [
        {
            icon: _jsx(BsAsterisk, { className: "text-[#a6a6a6]" }),
            title: "Flexibilidad",
            description: "Gestiona tu proyecto, empresa independientemente del tipo de empresa, podrás administrar desde una startup hasta una distribuidora.",
        },
        {
            icon: _jsx(BsAsterisk, { className: "text-[#a6a6a6]" }),
            title: "Flexibilidad",
            description: "Gestiona tu proyecto, empresa independientemente del tipo de empresa, podrás administrar desde una startup hasta una distribuidora.",
        },
        {
            icon: _jsx(BsAsterisk, { className: "text-[#a6a6a6]" }),
            title: "Flexibilidad",
            description: "Gestiona tu proyecto, empresa independientemente del tipo de empresa, podrás administrar desde una startup hasta una distribuidora.",
        },
        {
            icon: _jsx(BsAsterisk, { className: "text-[#a6a6a6]" }),
            title: "Flexibilidad",
            description: "Gestiona tu proyecto, empresa independientemente del tipo de empresa, podrás administrar desde una startup hasta una distribuidora.",
        },
        {
            icon: _jsx(BsAsterisk, { className: "text-[#a6a6a6]" }),
            title: "Flexibilidad",
            description: "Gestiona tu proyecto, empresa independientemente del tipo de empresa, podrás administrar desde una startup hasta una distribuidora.",
        },
        {
            icon: _jsx(BsAsterisk, { className: "text-[#a6a6a6]" }),
            title: "Flexibilidad",
            description: "Gestiona tu proyecto, empresa independientemente del tipo de empresa, podrás administrar desde una startup hasta una distribuidora.",
        },
        // Agrega más objetos de cartas aquí
    ];
    return (_jsx("div", { className: "divcontainersection min-h-screen items-center  flex-col gap-[64px] mx-auto flex  bg-[#FAFAFA] ", children: _jsxs("div", { className: "section flex flex-col gap-[64px] w-full max-w-[80%]  mx-auto ]  ", children: [_jsxs("div", { className: "titlesection w-full flex flex-col gap-[20px] justify-center items-center ", children: [_jsx("div", { className: "buttonsecttionname w-full justify-center flex", children: _jsxs("button", { className: " flex gap-2 w-auto px-[10px] py-[2px] rounded-full  items-center text-[#a6a6a6] border-1 border-[#a6a6a6] ", children: [_jsx(AiFillThunderbolt, {}), " Caracteristicas"] }) }), _jsxs("h2", { className: "titlesectionh2 text-center font-[700] text-[48px] ", children: ["Porque somos los ", _jsx("span", { className: " text-[#70C955] ", children: " mejores!" })] })] }), _jsx("div", { className: "gridcontainer grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-4 gap-y-[64px] ", children: cards.map((card, index) => (_jsxs("div", { className: "cardcaracterist mx-auto w-[350px] flex flex-col gap-4 p-4 rounded-lg px-[36px] py-[20px]  ", children: [_jsx("div", { className: "w-[60px] h-[60px] flex justify-center bg-[#E0EDFA] rounded-lg items-center", children: card.icon }), _jsx("h5", { className: "titulocardgrid-landing text-[24px] text-[#70C955] font-bold", children: card.title }), _jsx("span", { className: "cardescriptiongrid-landing text-[15px] text-gray-700", children: card.description })] }, index))) })] }) }));
};
export default Whoweare;
