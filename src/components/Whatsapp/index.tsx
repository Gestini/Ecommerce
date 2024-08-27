import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = ({ telefono }: number) => {
  return (
    <div className="fixed bottom-[10%] right-[7%]">
      <a
        className="w-full cursor-default"
        href={`https://wa.me/${telefono}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center cursor-pointer justify-center w-[60px] h-[60px] rounded-full bg-green-500 text-white transform hover:scale-110 transition duration-500 ease-in-out">
          <FaWhatsapp size={40} />
        </div>
      </a>
    </div>
  );
};

export default WhatsApp;
