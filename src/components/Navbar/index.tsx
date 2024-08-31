import ContactForm from '@/components/ContactForm';
import { addProductToCart, decreaseProductQuantity, removeProductFromCart } from "@/features/cart";
import { RootState } from "@/store";
import { Product } from "@/types/Products";
import { useState } from "react";
import { FaMinus, FaPlus, FaShoppingCart, FaTrash, FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.data);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isContactForm, setContactForm] = useState(false);
  const currentUnit = useSelector((state: any) => state.unit);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const contactForm = () => {
    setContactForm(!isContactForm);
  };

  const handleRemoveAllFromCart = (productId: number) => {
    dispatch(removeProductFromCart(productId));
  };

  const handleIncreaseQuantity = (product: Product) => {
    dispatch(addProductToCart({ product, quantity: 1 }));
  };

  const handleDecreaseQuantity = (product: Product) => {
    dispatch(decreaseProductQuantity({ productId: product.id, quantity: 1 }));
  };

  const handleAddToCart = (product: Product) => {
    dispatch(addProductToCart({ product, quantity: 1 }));
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <>
      <div className="sticky top-0 left-0 z-20">
        {/* Header */}
        <div className="h-[70px] p-[5px] px-10 shadow-md flex justify-between items-center relative bg-[white]">
          <img className='w-[40px] height-[40px]' src={currentUnit?.image} alt="" />
          <button onClick={toggleSidebar} className="w-[40px] relative h-[40px] flex justify-center items-center bg-c-primary-variant-1 rounded-full">
            <FaShoppingCart className="text-white" />
            <span className="absolute top-[-5px] right-[-5px] text-[12px] font-bold text-white bg-orange-500 rounded-full w-[20px] h-[20px] flex items-center justify-center">
              {calculateTotalQuantity()}
            </span>
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`absolute flex flex-col justify-between top-0 right-0 w-full ssm:w-64  h-screen p-4 shadow-md overflow-y-auto bg-white transition-transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="p-[5px] pr-[20px] flex justify-between border-b border-gray-300 mb-2">
            Carrito
          </div>
          <button
            onClick={toggleSidebar}
            className="text-gray-400 mt-1 bg-transparent text-sm absolute top-2.5 right-2.5 hover:text-gray-800 p-1 hover:bg-gray-200 rounded-full animation inline-flex items-center"
          >
            <IoMdClose size={20} />
            <span className="sr-only">Close menu</span>
          </button>
          <ul className="space-y-1 font-medium h-full overflow-auto">
            {cart.map((product) => (
              <li key={product.id}>
                <div className="flex items-center justify-between p-1 text-gray-900 rounded-lg gap-2">
                  <div className="flex justify-between items-center">
                    <img src={product.image} className="bg-gray-200 h-[40px] w-[40px] mr-2 rounded-md" alt={product.name} />
                    <div className="flex flex-col">
                      <span className="text-[14px]">{product.name}</span>
                      <div className="flex items-center gap-2">
                        <div onClick={() => handleDecreaseQuantity(product)} className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-200">
                          <FaMinus className="text-[10px] text-gray-600 cursor-pointer" />
                        </div>
                        <span className="text-[14px]">{product.quantity}</span>
                        <div onClick={() => handleIncreaseQuantity(product)} className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-200">
                          <FaPlus className="text-[10px] text-gray-600 cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <FaTrash className="text-[12px] cursor-pointer" onClick={() => handleRemoveAllFromCart(product.id)} />
                </div>
              </li>
            ))}
          </ul>

          <div className="p-[5px] pr-[20px] flex justify-between border-t border-gray-300 mb-2">
            <span>Total</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <button onClick={contactForm} className="flex items-center gap-2 p-2 bg-green-500 w-full mb-1 rounded-md text-white text-[17px] font-medium justify-center hover:bg-green-600 animation">
            Enviar con <FaWhatsapp />
          </button>

        </div>
      </div>
      {isContactForm && <ContactForm setContactForm={setContactForm} />}
    </>
  );
};

export default Index;
