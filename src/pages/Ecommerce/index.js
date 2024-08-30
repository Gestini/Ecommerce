import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Filtros from "../../components/Filtros";
import Footer from "../../components/Footer";
import Herosection from "../../components/Hero/Herosection";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import Whatsapp from "../../components/Whatsapp";
import "./Ecommerce.scss";
const Ecommerce = () => {
    return (_jsxs("div", { className: "w-full overflow-x-clip", children: [_jsx(Navbar, {}), _jsx(Herosection, {}), _jsxs("div", { className: "px-10", children: [_jsx(Filtros, {}), _jsx(Product, {}), _jsx(Whatsapp, {})] }), _jsx(Footer, {})] }));
};
export default Ecommerce;
