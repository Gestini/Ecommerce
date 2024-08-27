import React from "react";
import ProductCard from "./cardproduct";
import "./Product.scss";
import productsData from "./product.json";

const ProductSection = () => {
  return (
    <div className="Productsection w-full max-w-[1500px] mx-auto gap-4 flex flex-col">
      {productsData.map((category) => (
        <div key={category.category} className="mb-8">
          <h3 className="Categoryproducts text-[#333333] text-[35px] font-[600] mb-4">
            {category.category}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {category.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;
