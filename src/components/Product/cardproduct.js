import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { addProductToCart } from "@/features/cart";
import { setCurrentProduct } from "@/features/products";
import { Tooltip } from "@nextui-org/react";
const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addProductToCart({ product, quantity: 1 }));
    };
    const handleSetProduct = () => {
        dispatch(setCurrentProduct(product));
    };
    return (_jsxs("div", { className: "relative bg-white shadow-shadowcard p-4 flex flex-col items-center rounded-lg hover:scale-105 transition duration-300", children: [_jsx("div", { className: "w-40 h-40 rounded-md overflow-hidden", children: _jsx("img", { src: product.image, alt: product.name, className: "w-full h-full object-contain object-center" }) }), _jsxs("div", { className: "pt-2 mt-4 border-t border-t-gray-300 w-full", children: [_jsx("h3", { className: "text-lg font-semibold", children: product.name }), _jsxs("p", { className: "text-gray-600", children: ["$", product.price.toFixed(2)] })] }), _jsx("div", { className: "absolute inset-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg", children: _jsx("span", { className: "p-2 px-5 bg-white text-[16px] rounded-xl cursor-pointer", onClick: handleSetProduct, children: "Ver detalle" }) }), _jsx(Tooltip, { content: "Agregar al carrito", children: _jsx("div", { className: "h-[30px] select-none w-[30px] cursor-pointer bg-c-primary-variant-1 rounded-full text-[20px] text-white absolute top-2 right-2 flex items-center justify-center", onClick: handleAddToCart, children: "+" }) })] }));
};
export default ProductCard;
