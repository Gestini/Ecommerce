"use client";
import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalBody, Input } from "@nextui-org/react";
import { FaDiscord, FaStream } from "react-icons/fa";
import { Link } from "react-router-dom";
import { reqPostUserWithelist } from "@/api/requests";

interface StepModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialStep?: number;
}

const StepModal: React.FC<StepModalProps> = ({
  isOpen,
  onClose,
  initialStep = 1,
}) => {
  const [step, setStep] = useState<number>(initialStep);
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    name: "",
  });

  useEffect(() => {
    if (isOpen) {
      // Leer el estado desde localStorage
      const isRegistered = localStorage.getItem("isRegistered") === "true";
      setStep(isRegistered ? 3 : initialStep);
    }
  }, [isOpen, initialStep]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextStep = () => {
    if (step === 3) {
      onClose(); // Cierra el modal si estamos en el paso 3
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleResetStep = () => {
    setStep(initialStep);
  };

  const handleClose = () => {
    handleResetStep();
    onClose();
  };

  const handleSubmit = async () => {
    try {
      const response = await reqPostUserWithelist(formData);

      if (response && typeof response === "object") {
        if (response.success) {
          localStorage.setItem("isRegistered", "true");
          handleNextStep();
        } else if (response.statusCode === 409) {
          // Maneja el caso de correo ya registrado
          setError("El correo electrónico ya está registrado.");
          setStep(4); // Cambia al paso del error
        } else {
          console.error("Error al registrar los datos", response);
        }
      } else {
        console.error("Respuesta inesperada del servidor", response);
      }
    } catch (error) {
      console.error("Error al enviar los datos", error);
      setError("Email ya registrado");
      setStep(4); // Cambia al paso del error en caso de error de red u otro
    }
  };
  const renderStepContent = (): JSX.Element => {
    switch (step) {
      case 1:
        return (
          <>
            <h3 className="text-primary text-center text-[30px] font-[700]">
              ¡Estamos casi listos!
            </h3>
            <p className="text-secondary text-center mb-4">
              Deja tu correo electrónico y te notificaremos cuando la aplicación
              esté disponible.
            </p>
            <div className="rowbuttonsinvolucrar gap-4 flex">
              <div
                onClick={handleNextStep}
                className=" flex-grow cursor-pointer text-secondary py-[5px] px-[20px] flex gap-2 items-center justify-start rounded-md bg-background border-[1px]"
              >
                <FaStream className="text-primary" />
                <span> Notificarme </span>
              </div>
              <div className="w-[150px] text-secondary py-[5px] flex gap-2 items-center justify-center rounded-md bg-background border-[1px]">
                <FaDiscord className="text-primary" />
                <Link to={""}>Comunidad</Link>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h3 className="text-primary text-center text-[30px] font-[700]">
              Lista de espera
            </h3>
            <div className="rowbuttonsinvolucrar flex-col gap-2 flex">
              <Input
                type="email"
                variant="bordered"
                name="email"
                label="Email"
                className=" w-full h-full outline-none "
                placeholder="Coloca tu email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                type="number"
                variant="bordered"
                label="Numero"
                name="phoneNumber"
                className=" w-full h-full outline-none "
                placeholder="+54 9 xxx xxxx xxx"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <Input
                type="text"
                variant="bordered"
                label="Nombre"
                name="name"
                className=" w-full h-full outline-none "
                placeholder="Coloca tu nombre"
                value={formData.name}
                onChange={handleChange}
              />

              <span className=" text-center text-[12px] text-primary ">
                Tu correo se registrará en la whitelist
              </span>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-primary text-center text-[30px] font-[700]">
              ¡Grandioso!
            </h3>
            <div className="rowbuttonsinvolucrar flex-col gap-2 flex">
              <span className=" text-center text-[16px] text-primary ">
                Te avisaremos cuando puedas empezar a utilizar la aplicacion!
              </span>
            </div>
          </>
        );
      case 4: // Nuevo paso para mostrar el error
        return (
          <>
            <h3 className="text-primary text-center text-[30px] font-[700]">
              Error
            </h3>
            <div className="rowbuttonsinvolucrar flex-col gap-2 flex">
              <span className=" text-center text-[16px] text-primary ">
                {error}
              </span>
            </div>
          </>
        );
      default:
        return (
          <h3 className="text-primary text-center text-[30px] font-[700]">
            Fin del proceso
          </h3>
        );
    }
  };

  return (
    <Modal
      backdrop={"blur"}
      size={"xl"}
      isOpen={isOpen}
      onClose={handleClose}
      placement={"center"}
    >
      <ModalContent>
        <ModalBody className="py-[30px] px-[60px] flex flex-col gap-7">
          {renderStepContent()}
          {step === 2 ? (
            <button
              className="w-full cursor-pointer font-[600] text-white bg-primary py-[10px] rounded-md"
              onClick={handleSubmit}
            >
              Registrar
            </button>
          ) : step === 4 ? (
            <button
              className="w-full cursor-pointer font-[600] text-white bg-primary py-[10px] rounded-md"
              onClick={handleClose}
            >
              Cerrar
            </button>
          ) : (
            <button
              className="w-full cursor-pointer font-[600] text-white bg-primary py-[10px] rounded-md"
              onClick={handleNextStep}
            >
              Siguiente
            </button>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default StepModal;
