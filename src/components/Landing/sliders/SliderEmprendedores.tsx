import React from "react";
import "./Slider.scss";

// import "../../../assets/Logos/Amazon.png"

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
              <img
                src={image.src}
                height={image.height || "100"}
                width={image.width || "250"}
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
