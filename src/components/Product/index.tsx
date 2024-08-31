import { RootState } from "@/store";
import { Spinner } from "@nextui-org/spinner";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import ProductDetail from "./productDetail";
import ProductCard from "./cardproduct";
import "./Product.scss";
import { selectProductsToDisplay, setCurrentPage } from "@/features/products";
import React from "react";

const ProductSection = () => {
  const dispatch = useDispatch();
  const productsToDisplay = useSelector(selectProductsToDisplay);
  const { filteredData, currentPage, productsPerPage, totalPage } = useSelector((state: RootState) => state.products);

  const nextPage = () => {
    const endIdx = (currentPage + 1) * productsPerPage;
    if (endIdx < filteredData.length) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };


  return (
    <>
      <div className="ProductSection mb-10 w-full max-w-[1500px] sm:mb-12 mx-auto gap-4 flex flex-col">
        <div className="grid gap-4 grid-cols-1 sim:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
        <div className="flex justify-center">
          <span className="pr-5 text-[14px] h-[35px] flex items-center text-gray-500">
            {currentPage * productsPerPage + 1}-{Math.min((currentPage + 1) * productsPerPage, filteredData.length)} de {filteredData.length} productos
          </span>
        </div>
        <div className="flex gap-3 justify-between">
          <div
            onClick={handlePreviousPage}
            className={`w-[30px] h-[30px] sm:h-[35px] sm:w-[35px] cursor-pointer border border-gray-300 text-gray-300 text-[14px] ${currentPage === 0 ? 'cursor-not-allowed opacity-50' : 'hover:border-gray-500 hover:text-gray-500'} rounded-full transition duration-300 flex items-center justify-center`}
          >
            <IoIosArrowBack />
          </div>
          <div
            onClick={nextPage}
            className={`w-[30px] h-[30px] sm:h-[35px] sm:w-[35px] cursor-pointer border border-gray-300 text-gray-300 text-[14px] ${currentPage >= totalPage - 1
              ? "cursor-not-allowed opacity-50"
              : "hover:border-gray-500 hover:text-gray-500"
              } rounded-full transition duration-300 flex items-center justify-center`}
          >
            <IoIosArrowForward />
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductSection;
