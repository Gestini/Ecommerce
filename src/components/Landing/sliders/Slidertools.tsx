import React from "react";
import "./Slider.scss";

const Carousel = ({ items }: any) => {
  const carouselTrackStyle = {
    width: `${items.length * 2 * 250}px`,
  };

  return (
    <div className="carousel">
      <div className="carousel-track" style={carouselTrackStyle}>
        {items.concat(items).map((item: any, index: any) => (
          <div
            key={index}
            className="carousel-item flex justify-center items-center"
          >
            <div className="item-container flex justify-center items-center">
              <div className="item-content text-[13px] rounded-3xl font-[600] border-1 border-[#a0db8e69] px-[30px] py-[3px] text-[#5ABD3C]">
                {item}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
