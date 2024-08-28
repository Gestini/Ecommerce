import React from "react";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => (
  <div
    className="relative bg-white shadow-shadowcard p-4 flex flex-col items-center rounded-lg hover:scale-105 transition duration-300"

  >
    <div className="w-40 h-40 rounded-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover object-center"
      />
    </div>
    <div className="pt-2 mt-4 border-t border-t-gray-300 w-full">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
    </div>
    <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
      <span className="p-2 px-5 bg-white text-[16px] rounded-xl cursor-pointer" onClick={onClick}>
        Ver detalle
      </span>
    </div>
    <div className="h-[30px] w-[30px] cursor-pointer bg-c-primary-variant-1 rounded-full text-[20px] text-white absolute top-2 right-2 flex items-center justify-center">+</div>
  </div>
);

export default ProductCard;