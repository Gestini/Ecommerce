import { Product, Products } from "@/types/Products";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./cardproduct";
import "./Product.scss";
import ProductDetail from "./productDetail";
import ProductsDefault from './product.json';
import { RootState } from "@/store";
import { setProducts } from "@/features/products";

const ProductSection = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.data);

  React.useEffect(() => {
    dispatch(setProducts(ProductsDefault));
  }, []);

  return (
    <>
      <div className="ProductSection w-full max-w-[1500px] mb-12 mx-auto gap-4 flex flex-col">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <ProductDetail />
      </div>
      <div className="flex justify-between my-5 mt-0 py-5 pb-1 border-t border-t-gray-200">
        <div className="flex">
          <span className="pr-5 h-[35px] flex items-center text-gray-500">32 of 32 products</span>
        </div>
        <div className="h-[35px] w-[35px] cursor-pointer border border-gray-300 text-gray-300 text-[14px] hover:border-gray-500 hover:text-gray-500 rounded-full transition duration-300 flex items-center justify-center">
          <IoIosArrowForward />
        </div>
      </div>
    </>
  );
};

export default ProductSection;
