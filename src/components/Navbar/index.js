import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ContactForm from '@/components/ContactForm';
import { addProductToCart, decreaseProductQuantity, removeProductFromCart } from "@/features/cart";
import { useState } from "react";
import { FaMinus, FaPlus, FaShoppingCart, FaTrash, FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from "react-redux";
import { GestinyLogo } from "../../assets/Logo";
const Index = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.data);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isContactForm, setContactForm] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    const contactForm = () => {
        setContactForm(!isContactForm);
    };
    const handleRemoveAllFromCart = (productId) => {
        dispatch(removeProductFromCart(productId));
    };
    const handleIncreaseQuantity = (product) => {
        dispatch(addProductToCart({ product, quantity: 1 }));
    };
    const handleDecreaseQuantity = (product) => {
        dispatch(decreaseProductQuantity({ productId: product.id, quantity: 1 }));
    };
    const handleAddToCart = (product) => {
        dispatch(addProductToCart({ product, quantity: 1 }));
    };
    const calculateTotalQuantity = () => {
        return cart.reduce((total, product) => total + product.quantity, 0);
    };
    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "sticky top-0 left-0 z-20", children: [_jsxs("div", { className: "h-[70px] p-[5px] px-10 shadow-md flex justify-between items-center relative bg-[white]", children: [_jsx(GestinyLogo, {}), _jsxs("button", { onClick: toggleSidebar, className: "w-[40px] relative h-[40px] flex justify-center items-center bg-c-primary-variant-1 rounded-full", children: [_jsx(FaShoppingCart, { className: "text-white" }), _jsx("span", { className: "absolute top-[-5px] right-[-5px] text-[12px] font-bold text-white bg-orange-500 rounded-full w-[20px] h-[20px] flex items-center justify-center", children: calculateTotalQuantity() })] })] }), _jsxs("div", { className: `absolute flex flex-col justify-between top-0 right-0 w-64 h-screen p-4 shadow-md overflow-y-auto bg-white transition-transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`, children: [_jsx("div", { className: "p-[5px] pr-[20px] flex justify-between border-b border-gray-300 mb-2", children: "Carrito" }), _jsxs("button", { onClick: toggleSidebar, className: "text-gray-400 mt-1 bg-transparent text-sm absolute top-2.5 right-2.5 hover:text-gray-800 p-1 hover:bg-gray-200 rounded-full animation inline-flex items-center", children: [_jsx(IoMdClose, { size: 20 }), _jsx("span", { className: "sr-only", children: "Close menu" })] }), _jsx("ul", { className: "space-y-1 font-medium h-full overflow-auto", children: cart.map((product) => (_jsx("li", { children: _jsxs("div", { className: "flex items-center justify-between p-1 text-gray-900 rounded-lg gap-2", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("img", { src: product.image, className: "bg-gray-200 h-[40px] w-[40px] mr-2 rounded-md", alt: product.name }), _jsxs("div", { className: "flex flex-col", children: [_jsx("span", { className: "text-[14px]", children: product.name }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { onClick: () => handleDecreaseQuantity(product), className: "w-4 h-4 flex items-center justify-center rounded-full bg-gray-200", children: _jsx(FaMinus, { className: "text-[10px] text-gray-600 cursor-pointer" }) }), _jsx("span", { className: "text-[14px]", children: product.quantity }), _jsx("div", { onClick: () => handleIncreaseQuantity(product), className: "w-4 h-4 flex items-center justify-center rounded-full bg-gray-200", children: _jsx(FaPlus, { className: "text-[10px] text-gray-600 cursor-pointer" }) })] })] })] }), _jsx(FaTrash, { className: "text-[12px] cursor-pointer", onClick: () => handleRemoveAllFromCart(product.id) })] }) }, product.id))) }), _jsxs("div", { className: "p-[5px] pr-[20px] flex justify-between border-t border-gray-300 mb-2", children: [_jsx("span", { children: "Total" }), _jsxs("span", { children: ["$", calculateTotal().toFixed(2)] })] }), _jsxs("button", { onClick: contactForm, className: "flex items-center gap-2 p-2 bg-green-500 w-full mb-1 rounded-md text-white text-[17px] font-medium justify-center hover:bg-green-600 animation", children: ["Enviar con ", _jsx(FaWhatsapp, {})] })] })] }), isContactForm && _jsx(ContactForm, { setContactForm: setContactForm })] }));
};
export default Index;
