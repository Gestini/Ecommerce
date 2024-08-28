import React from "react";
import ProductCard from "./cardproduct";
import "./Product.scss";
import productsData from "./product.json";
import ProductDetail from "./productDetail";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductSection = () => {
  interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
    description?: string; // Agrega más detalles según sea necesario
  }

  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="ProductSection w-full max-w-[1500px] mb-12 mx-auto gap-4 flex flex-col">
        {productsData.map((category) => (
          <div key={category.category}>
            <h6 className="text-c-primary-variant-1 text-[35px] font-[600] mb-4">
              {category.category}
            </h6>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {category.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleProductClick(product)}
                />
              ))}
            </div>
          </div>
        ))}

        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={handleCloseDetail}
          />
        )}
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

