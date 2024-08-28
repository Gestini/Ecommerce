import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaShoppingCart } from "react-icons/fa";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  description?: string;
}

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrement = () => setQuantity(prevQuantity => Math.min(prevQuantity + 1, 6));
  const handleDecrement = () => setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
  const handleManualInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(isNaN(value) ? 1 : Math.min(Math.max(value, 1), 6));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[1000px] h-[550px] p-6 relative flex">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <IoMdClose size={24} />
        </button>
        <div className="w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-cover object-center rounded-md"
          />
        </div>
        <div className="w-1/2 pl-6 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-800 text-xl font-bold text-[22px]">${product.price.toFixed(2)}</p>
            <p className="text-red-600 mb-2 font-bold text-[17px]">20% OFF</p>
            <p className="text-gray-700 mb-4 h-[200px] text-[15px] text overflow-auto">
              {product.description || 'Sin descripción'}
            </p>
            <p className="text-[15px] mb-2">Color: <strong>Celeste</strong></p>
            <div className='flex gap-2 mb-3'>
              <div className='rounded-lg overflow-hidden h-[50px] w-[50px] border-blue-500 border-2 flex items-center justify-center'>
                <img className='h-[40px] w-[40px] object-cover' src={product.image} alt="" />
              </div>

              <div className='rounded-lg overflow-hidden h-[50px] w-[50px] border-gray-300 border-2 flex items-center justify-center'>
                <img className='h-[40px] w-[40px] object-cover' src={product.image} alt="" />
              </div>

              <div className='rounded-lg overflow-hidden h-[50px] w-[50px] border-gray-300 border-2 flex items-center justify-center'>
                <img className='h-[40px] w-[40px] object-cover' src={product.image} alt="" />
              </div>
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-4 gap-4 bg-white items-center">
              Cantidad:
              <div
                onClick={handleDecrement}
                className="h-[30px] w-[30px] cursor-pointer  bg-gray-300 rounded-full text-[20px] text-white flex items-center justify-center"
              >
                -
              </div>
              <input
                type="number"
                value={quantity}
                onChange={handleManualInput}
                className="no-arrows w-[30px] border-none outline-none text-center"
              />
              <div
                onClick={handleIncrement}
                className="h-[30px] w-[30px] cursor-pointer bg-gray-300 rounded-full text-[20px] text-white flex items-center justify-center"
              >
                +
              </div>
              <span className="text-gray-400 text-[14px] ml-2">(+10 disponibles)</span>
            </div>

            <button className='flex items-center justify-center gap-2 bg-green-500 w-full text-[16px] font-semibold hover:bg-green-600 transition duration-300 p-2 rounded-lg text-white'>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;