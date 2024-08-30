import { RootState } from '@/store';
import { FormData } from '@/types/Contact';
import React from 'react'
import { IoMdClose } from 'react-icons/io';
import { useSelector } from 'react-redux';

const ContactForm = ({ setContactForm }:any) => {
    const cart = useSelector((state: RootState) => state.cart.data);
    const [formData, setFormData] = React.useState<FormData>({
        email: '',
        fullName: '',
        phone: '',
        note: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Manejador de envío del formulario
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleRedirect();
    };

    const buildMessage = () => {
        const orderNumber = "#101215";
        const personalInfo = `Hola vengo desde la web Orden - N° ${orderNumber}.\nMi nombre es ${formData.fullName}.\nMi email es: ${formData.email}.\nMi número de documento es: ${formData.phone}.\n\n`;
        let productsInfo = "Quería comprar estos productos:\n\n";
        cart.forEach(product => {
            productsInfo += `- ${product.name} (Cantidad: ${product.quantity})\n`;
        });
        const note = `\nNota: ${formData.note}`;
        return personalInfo + productsInfo + note;
    };

    const handleRedirect = () => {
        const message = buildMessage();
        const whatsappUrl = `https://wa.me/5493816100078?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-opacity-50 flex items-center justify-center z-30">
            <div className="absolute w-full h-screen inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20" onClick={() => setContactForm(false)}></div>
            <div className="relative h-full w-full p-5 sim:h-auto sim:w-auto top-0 left-0 bg-white rounded-lg shadow-lg sim:p-6 sim:px-12 flex z-50">
                <button
                    className="absolute top-1 right-1 sim:top-4 sim:right-4 text-gray-600 hover:text-gray-800 p-2 hover:bg-gray-200 rounded-full animation"
                    onClick={() => setContactForm(false)}
                >
                    <IoMdClose size={24} />
                </button>
                <form onSubmit={handleSubmit} className="w-full sim:max-w-md sim:mx-auto">
                    <div className='mb-3 text-[17px] font-semibold text-gray-500 text-center'>Orden - N° #101215</div>

                    {/* Email */}
                    <div className="relative z-0 mb-5 w-full sim:w-[400px] group ">
                        <input
                            type="email"
                            name="email"
                            id="floating_email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=""
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email
                        </label>
                    </div>

                    {/* Fullname */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="fullName"
                            id="floating_full_name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            minLength={7}
                            placeholder=""
                            required
                        />
                        <label
                            htmlFor="floating_full_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Nombre completo
                        </label>
                    </div>

                    {/* Phone */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="number"
                            name="phone"
                            id="floating_phone"
                            value={formData.phone}
                            onChange={handleChange}
                            minLength={7}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=""
                            required
                        />
                        <label
                            htmlFor="floating_phone"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Número de teléfono
                        </label>
                    </div>

                    {/* Note */}
                    <div className="relative z-0 w-full mb-5 group">
                        <textarea
                            name="note"
                            id="floating_note"
                            value={formData.note}
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full min-h-[100px] resize-none text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=""
                            required
                        />
                        <label
                            htmlFor="floating_note"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Nota
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="text-white bg-green-500 hover:bg-green-600 animation font-medium rounded-lg text-[17px] w-full px-5 py-2.5 text-center"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;
