import { setCurrentProduct } from "@/features/products";
import { RootState } from "@/store";
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "@/features/cart";
import { Product } from "@/types/Products";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.products.currentProduct) as Product | null;
  const [quantity, setQuantity] = useState<number>(1);

  const closeDetail = () => {
    dispatch(setCurrentProduct(null));
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(addProductToCart({ product, quantity }));
      closeDetail();
      setQuantity(1);
    }
  };

  return (
    product &&
    <div className="fixed top-0 left-0 w-full h-screen bg-opacity-50 flex items-center justify-center z-30">
      <div onClick={closeDetail} className="absolute w-full h-screen inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"></div>
      <div className="relative overflow-y-auto bg-white rounded-lg shadow-lg h-screen w-full lg:w-[1000px] items-center lg:h-[450px] p-3 sm:6 md:flex flex-row z-50">
        <button
          className="absolute top-1 right-1 sm:top-6 sm:right-6 text-gray-600 hover:text-gray-800 p-2 hover:bg-gray-200 rounded-full animation"
          onClick={closeDetail}
        >
          <IoMdClose size={24} />
        </button>
        <div className="h-[300px] w-[100%]  lg:w-1/2 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain object-center rounded-md"
          />
        </div>
        <div className="w-full pt-5 lg:w-1/2 lg:pl-6 flex flex-col justify-center lg:justify-between">
          <div>
            <h3 className="text-3xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-800 text-xl font-bold text-[22px]">${product.price?.toFixed(2)}</p>
            <p className="text-red-600 mb-2 font-bold text-[17px]">20% OFF</p>
            <p className="text-gray-700 mb-4 lg:h-[100px] text-[15px] text overflow-auto">
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
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                className="h-[30px] w-[30px] cursor-pointer select-none bg-gray-300 rounded-full text-[20px] text-white flex items-center justify-center"
              >
                -
              </div>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="no-arrows w-[50px] outline-none text-center border border-gray-100 p-1 rounded-md"
              />
              <div
                onClick={() => setQuantity((prev) => prev + 1)}
                className="h-[30px] w-[30px] select-none cursor-pointer bg-gray-300 rounded-full text-[20px] text-white flex items-center justify-center"
              >
                +
              </div>
              <span className="text-gray-400 text-[14px] ml-2">(+10 disponibles)</span>
            </div>
            <button
              onClick={handleAddToCart}
              className='flex items-center justify-center gap-2 bg-green-500 w-full text-[16px] font-semibold hover:bg-green-600 transition duration-300 p-2 rounded-lg text-white'
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
