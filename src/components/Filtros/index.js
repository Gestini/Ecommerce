import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { setFilteredProducts } from '@/features/products';
import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
const index = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.data);
    const [activeFilter, setActiveFilter] = React.useState('Todos');
    const data = useSelector((state) => state.products);
    const filters = [
        { name: 'Todos', active: activeFilter === 'Todos' },
        { name: 'Más reciente', active: activeFilter === 'Más reciente' },
        { name: 'Menor precio', active: activeFilter === 'Menor precio' },
        { name: 'Mayor precio', active: activeFilter === 'Mayor precio' },
        { name: 'A-Z', active: activeFilter === 'A-Z' },
    ];
    const handleFilterChange = (nombreFiltro) => {
        setActiveFilter(nombreFiltro);
        let productosFiltrados;
        switch (nombreFiltro) {
            case 'Menor precio':
                productosFiltrados = [...products].sort((a, b) => a.price - b.price);
                break;
            case 'Mayor precio':
                productosFiltrados = [...products].sort((a, b) => b.price - a.price);
                break;
            case 'A-Z':
                productosFiltrados = [...products].sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'Más reciente':
            default:
                productosFiltrados = [...products]; // Suponiendo que el orden original es por recencia
                break;
        }
        dispatch(setFilteredProducts(productosFiltrados));
    };
    return (_jsxs("div", { className: "flex justify-between my-5 py-5 border-b border-b-gray-200", children: [_jsxs("div", { className: "flex", children: [_jsxs("span", { className: "pr-5 h-[35px] border-r border-r-gray-200 flex items-center text-gray-500", children: [data.productsPerPage, " of ", data.totalPage, " products"] }), _jsx("span", { className: "px-5 h-[35px] text-gray-400 flex items-center", children: "Sort by:" }), _jsx("div", { className: "flex gap-3", children: filters.map((ele, ind) => _jsx("span", { onClick: () => handleFilterChange(ele.name), className: `px-3 cursor-pointer flex items-center ${ele.active ? 'bg-c-primary-variant-1 hover:bg-c-primary-variant-1' : 'bg-gray-300 hover:bg-c-primary-variant-2'}  transition duration-300 text-white rounded-xl`, children: ele.name }, ind)) })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx("div", { className: "h-[35px] w-[35px] cursor-pointer border border-gray-300 text-gray-300 text-[14px] hover:border-gray-500 hover:text-gray-500 rounded-full transition duration-300 flex items-center justify-center", children: _jsx(IoIosArrowBack, {}) }), _jsx("div", { className: "h-[35px] w-[35px] cursor-pointer border border-gray-300 text-gray-300 text-[14px] hover:border-gray-500 hover:text-gray-500 rounded-full transition duration-300 flex items-center justify-center", children: _jsx(IoIosArrowForward, {}) })] })] }));
};
export default index;
