import "./Slider.scss";
import Imagenes from "@/assets/Images";

const Slider = ({ images }: any) => {
  const slideTrackStyle = {
    width: `${images.length * 2 * 250}px`, // 250px es el ancho base de cada slide
  };

  return (
    <div className="slider">
      <div className="slide-track" style={slideTrackStyle}>
        {images.concat(images).map((image: any, index: any) => {
          return (
            <div className="slide flex justify-center items-center" key={index}>
              <Imagenes
                src={image.src}
                className={image.className}
                alt={image.alt || ""}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
