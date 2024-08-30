import { RootState } from "@/store";
import { Spinner } from "@nextui-org/spinner";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import ProductDetail from "./productDetail";
import ProductCard from "./cardproduct";
import "./Product.scss";
import { setCurrentPage } from "@/features/products";
import React from "react";

const ProductSection = () => {
  const dispatch = useDispatch();
  const { filteredData, currentPage, productsPerPage, totalPage } = useSelector((state: RootState) => state.products);

  // Obtener los productos de la página actual
  const startIdx = currentPage * productsPerPage;
  const endIdx = startIdx + productsPerPage;
  const productsToDisplay = filteredData.slice(startIdx, endIdx);

  const nextPage = () => {
    if (endIdx < filteredData.length) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <>
      <div className="ProductSection w-full max-w-[1500px] mb-12 mx-auto gap-4 flex flex-col">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {productsToDisplay.length > 0 ? (
            productsToDisplay.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="text-[18px] text-gray-500 font-medium">No hay resultados</div>
          )}
        </div>
        {!filteredData.length && (
          <div className="grid place-content-center">
            <Spinner />
          </div>
        )}
        <ProductDetail />
      </div>
      <div className="flex justify-between my-5 mt-0 py-5 pb-1 border-t border-t-gray-200">
        <div className="flex">
          <span className="pr-5 h-[35px] flex items-center text-gray-500">
            {startIdx + 1}-{endIdx > totalPage ? totalPage : endIdx} de {filteredData.length} productos
          </span>
        </div>
        <div
          onClick={nextPage}
          className={`h-[35px] w-[35px] cursor-pointer border border-gray-300 text-gray-300 text-[14px] ${endIdx >= filteredData.length
              ? "cursor-not-allowed opacity-50"
              : "hover:border-gray-500 hover:text-gray-500"
            } rounded-full transition duration-300 flex items-center justify-center`}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </>
  );
};

export default ProductSection;
