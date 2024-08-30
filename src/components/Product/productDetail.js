import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { setCurrentProduct } from "@/features/products";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "@/features/cart";
const ProductDetail = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.currentProduct);
    const [quantity, setQuantity] = useState(1);
    const closeDetail = () => {
        dispatch(setCurrentProduct(null));
    };
    const handleAddToCart = () => {
        if (product) {
            dispatch(addProductToCart({ product, quantity }));
            closeDetail();
            setQuantity(1);
        }
    };
    return (product && (_jsxs("div", { className: "fixed top-0 left-0 w-full h-screen bg-opacity-50 flex items-center justify-center z-30", children: [_jsx("div", { onClick: closeDetail, className: "absolute w-full h-screen inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20" }), _jsxs("div", { className: "relative top-0 left-0 bg-white rounded-lg shadow-lg w-[1000px] h-[450px] p-6 flex z-50", children: [_jsx("button", { className: "absolute top-4 right-4 text-gray-600 hover:text-gray-800 p-2 hover:bg-gray-200 rounded-full animation", onClick: closeDetail, children: _jsx(IoMdClose, { size: 24 }) }), _jsx("div", { className: "w-1/2 overflow-hidden", children: _jsx("img", { src: product.image, alt: product.name, className: "w-full h-full object-contain object-center rounded-md" }) }), _jsx("div", { className: "w-1/2 pl-6 flex flex-col justify-between", children: _jsxs("div", { children: [_jsx("h3", { className: "text-3xl font-semibold mb-2", children: product.name }), _jsxs("p", { className: "text-gray-800 text-xl font-bold text-[22px]", children: ["$", product.price?.toFixed(2)] }), _jsx("p", { className: "text-red-600 mb-2 font-bold text-[17px]", children: "20% OFF" }), _jsx("p", { className: "text-gray-700 mb-4 h-[100px] text-[15px] text overflow-auto", children: product.description || "Sin descripción" }), _jsxs("p", { className: "text-[15px] mb-2", children: ["Color: ", _jsx("strong", { children: "Celeste" })] }), _jsxs("div", { className: "flex gap-2 mb-3", children: [_jsx("div", { className: "rounded-lg overflow-hidden h-[50px] w-[50px] border-blue-500 border-2 flex items-center justify-center", children: _jsx("img", { className: "h-[40px] w-[40px] object-cover", src: product.image, alt: "" }) }), _jsx("div", { className: "rounded-lg overflow-hidden h-[50px] w-[50px] border-gray-300 border-2 flex items-center justify-center", children: _jsx("img", { className: "h-[40px] w-[40px] object-cover", src: product.image, alt: "" }) }), _jsx("div", { className: "rounded-lg overflow-hidden h-[50px] w-[50px] border-gray-300 border-2 flex items-center justify-center", children: _jsx("img", { className: "h-[40px] w-[40px] object-cover", src: product.image, alt: "" }) })] }), _jsxs("div", { className: "flex w-full flex-wrap md:flex-nowrap mb-4 gap-4 bg-white items-center", children: ["Cantidad:", _jsx("div", { onClick: () => setQuantity((prev) => Math.max(prev - 1, 1)), className: "h-[30px] w-[30px] cursor-pointer select-none bg-gray-300 rounded-full text-[20px] text-white flex items-center justify-center", children: "-" }), _jsx("input", { type: "number", value: quantity, onChange: (e) => setQuantity(Number(e.target.value)), className: "no-arrows w-[50px] outline-none text-center border border-gray-100 p-1 rounded-md" }), _jsx("div", { onClick: () => setQuantity((prev) => prev + 1), className: "h-[30px] w-[30px] select-none cursor-pointer bg-gray-300 rounded-full text-[20px] text-white flex items-center justify-center", children: "+" }), _jsx("span", { className: "text-gray-400 text-[14px] ml-2", children: "(+10 disponibles)" })] }), _jsx("button", { onClick: handleAddToCart, className: "flex items-center justify-center gap-2 bg-green-500 w-full text-[16px] font-semibold hover:bg-green-600 transition duration-300 p-2 rounded-lg text-white", children: "Agregar al carrito" })] }) })] })] })));
};
export default ProductDetail;