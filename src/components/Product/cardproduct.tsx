import React from "react";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover rounded-t-lg"
    />
    <div className="mt-2">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
    </div>
  </div>
);

export default ProductCard;
