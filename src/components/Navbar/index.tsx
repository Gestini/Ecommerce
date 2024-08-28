import { useState } from "react";
import { FaShoppingCart, FaWhatsapp, FaTrash } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa";
import { GestinyLogo } from "../../assets/Logo";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { addProductToCart, decreaseProductQuantity, removeProductFromCart } from "@/features/cart";
import { Product } from "@/types/Products";

const Index = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.data);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleRemoveAllFromCart = (productId: number) => {
    dispatch(removeProductFromCart(productId));
  };

  const handleIncreaseQuantity = (product: Product) => {
    dispatch(addProductToCart(product));
  };

  const handleDecreaseQuantity = (product: Product) => {
    dispatch(decreaseProductQuantity(product.id));
    if (product.quantity <= 1) {
      dispatch(removeProductFromCart(product.id));
    }
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const buildMessage = () => {
    // Construir la parte de información personal
    const personalInfo = `😀 Hola! Mi nombre es Nicolás\n✉️ Mi email es: nico@gmail.com\n🆔 Mi número de documento es: 43240568\n\n`;

    // Construir la parte del carrito
    let productsInfo = "🛒 Vengo desde la web y quería comprar estos productos:\n\n";

    cart.forEach(product => {
      productsInfo += `- ${product.name} (Cantidad: ${product.quantity})\n`;
    });

    // Combinar ambas partes
    return personalInfo + productsInfo;
  };

  const message = buildMessage();
  const whatsappUrl = `https://wa.me/5493816100078?text=${encodeURIComponent(message)}`;


  return (
    <div className="sticky top-0 left-0 z-20">
      {/* Header */}
      <div className="h-[70px] p-[5px] px-10 shadow-md flex justify-between items-center relative bg-[white]">
        <GestinyLogo />
        <button onClick={toggleSidebar} className="w-[40px] relative h-[40px] flex justify-center items-center bg-c-primary-variant-1 rounded-full">
          <FaShoppingCart className="text-white" />
          <span className="absolute top-[-5px] right-[-5px] text-[12px] font-bold text-white bg-orange-500 rounded-full w-[20px] h-[20px] flex items-center justify-center">
            {calculateTotalQuantity()}
          </span>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`absolute flex flex-col justify-between top-0 right-0 w-64 h-screen p-4 shadow-md overflow-y-auto bg-white transition-transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-[5px] pr-[20px] flex justify-between border-b border-gray-300 mb-2">
          Carrito
        </div>
        <button
          onClick={toggleSidebar}
          className="text-gray-400 mt-1 bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <ul className="space-y-1 font-medium h-full overflow-auto">
          {cart.map((product) => (
            <li key={product.id}>
              <a href="#" className="flex items-center justify-between p-1 text-gray-900 rounded-lg gap-2">
                <div className="flex justify-between items-center">
                  <img src={product.image} className="bg-gray-200 h-[40px] w-[40px] mr-2 rounded-md" alt={product.name} />
                  <div className="flex flex-col">
                    <span className="text-[14px]">{product.name}</span>
                    <div className="flex items-center gap-2">
                      <div onClick={() => handleDecreaseQuantity(product)} className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-200">
                        <FaMinus className="text-[10px] text-gray-600" />
                      </div>
                      <span className="text-[14px]">{product.quantity}</span>
                      <div onClick={() => handleIncreaseQuantity(product)} className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-200">
                        <FaPlus className="text-[10px] text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>
                <FaTrash className="text-[12px] cursor-pointer" onClick={() => handleRemoveAllFromCart(product.id)} />
              </a>
            </li>
          ))}
        </ul>

        <div className="p-[5px] pr-[20px] flex justify-between border-t border-gray-300 mb-2">
          <span>Total</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
        <div className="">
          <a rel="noopener noreferrer" target="_blank" href={whatsappUrl} className="flex items-center gap-2 p-2 bg-c-primary-variant-1 w-full mb-1 rounded-md text-white text-[16px] justify-center">
            Enviar con <FaWhatsapp />
          </a>
          <button className="block p-2 bg-c-primary-variant-1 w-full rounded-md text-white text-[16px]">Enviar pedido</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
