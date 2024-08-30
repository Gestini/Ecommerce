import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import "./Herosection.scss";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProducts, setProducts } from "@/features/products";
import ProductsDefault from './product.json';
const Herosection = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.data);
    const [searchQuery, setSearchQuery] = React.useState("");
    React.useEffect(() => {
        dispatch(setProducts(ProductsDefault));
    }, [dispatch]);
    const handleSearch = (e) => {
        e.preventDefault();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
        dispatch(setFilteredProducts(filteredProducts));
    };
    return (_jsx("div", { className: "hero__main-section mb-4", children: _jsxs("div", { className: "bg-c-primary-variant-1 h-[45vh] bg-cover bg-center bg-[url('https://cdn.discordapp.com/attachments/1277840522047656119/1278154370726367242/header.png?ex=66cfc584&is=66ce7404&hm=79ecfb9255679933bba922db0a5a626a72f6469fb83eeb3a175ff433c50fdd94&')] w-full flex flex-col justify-center items-center gap-5", children: [_jsxs("div", { className: "title__section-hero flex flex-col justify-center items-center ", children: [_jsx("div", { className: "title__hero flex text-[2em] text-[white] font-[600] ", children: "TecnoPyme" }), _jsx("div", { className: "description__hero text-[20px] text-gray-100", children: "Tecnolog\u00EDa de vanguardia" })] }), _jsxs("form", { onSubmit: (e) => handleSearch(e), className: "input__section-hero max-w-[600px] w-full h-[60px] bg-white rounded-md flex ", children: [_jsx("div", { className: "search__input-hero h-full flex-grow", children: _jsx("input", { type: "text", placeholder: "Buscar...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "h-full text-[16px] w-full p-3 px-5 outline-none rounded-lg text-gray-600  " }) }), _jsx("div", { className: "action__box-hero w-[150px] flex justify-center items-center gap-3 p-3 border-l-2", children: _jsx("button", { type: "submit", className: "bg-c-primary-variant-1 h-full w-full text-white font-[500] rounded-lg hover:bg-c-primary-variant-2 transition duration-300", children: "Search" }) })] })] }) }));
};
export default Herosection;
