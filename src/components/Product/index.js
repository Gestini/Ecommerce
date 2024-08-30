import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Spinner } from "@nextui-org/spinner";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import ProductDetail from "./productDetail";
import ProductCard from "./cardproduct";
import "./Product.scss";
import { setCurrentPage } from "@/features/products";
const ProductSection = () => {
    const dispatch = useDispatch();
    const { filteredData, currentPage, productsPerPage, totalPage } = useSelector((state) => state.products);
    // Obtener los productos de la página actual
    const startIdx = currentPage * productsPerPage;
    const endIdx = startIdx + productsPerPage;
    const productsToDisplay = filteredData.slice(startIdx, endIdx);
    const nextPage = () => {
        if (endIdx < filteredData.length) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "ProductSection w-full max-w-[1500px] mb-12 mx-auto gap-4 flex flex-col", children: [_jsx("div", { className: "grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5", children: productsToDisplay.length > 0 ? (productsToDisplay.map((product) => (_jsx(ProductCard, { product: product }, product.id)))) : (_jsx("div", { className: "text-[18px] text-gray-500 font-medium", children: "No hay resultados" })) }), !filteredData.length && (_jsx("div", { className: "grid place-content-center", children: _jsx(Spinner, {}) })), _jsx(ProductDetail, {})] }), _jsxs("div", { className: "flex justify-between my-5 mt-0 py-5 pb-1 border-t border-t-gray-200", children: [_jsx("div", { className: "flex", children: _jsxs("span", { className: "pr-5 h-[35px] flex items-center text-gray-500", children: [startIdx + 1, "-", endIdx > totalPage ? totalPage : endIdx, " de ", filteredData.length, " productos"] }) }), _jsx("div", { onClick: nextPage, className: `h-[35px] w-[35px] cursor-pointer border border-gray-300 text-gray-300 text-[14px] ${endIdx >= filteredData.length
                            ? "cursor-not-allowed opacity-50"
                            : "hover:border-gray-500 hover:text-gray-500"} rounded-full transition duration-300 flex items-center justify-center`, children: _jsx(IoIosArrowForward, {}) })] })] }));
};
export default ProductSection;
