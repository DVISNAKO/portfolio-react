import React, { useState } from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import "./Slider.css";

const Slider = () => {
  const wrapperImages = [
    {
      src: require("./apple-1.jpg"),
      alt: "apple-1",
    },
    {
      src: require("./apple-2.jpg"),
      alt: "apple-2",
    },
    {
      src: require("./apple-3.jpg"),
      alt: "apple-3",
    },
    {
      src: require("./apple-4.jpg"),
      alt: "apple-4",
    },
  ];

  const [sliderIndex, setSliderIndex] = useState(0);

  const prevSlide = () => {
    setSliderIndex(
      (prevIndex) =>
        (prevIndex - 1 + wrapperImages.length) % wrapperImages.length
    );
  };

  const nextSlide = () => {
    setSliderIndex((prevIndex) => (prevIndex + 1) % wrapperImages.length);
  };

  return (
    <div>
      <Header />
      <div className="slider">
        <div className="text-slider">
          <span className="multiple-text-slider"></span>
        </div>
        <div className="main__block">
          {wrapperImages.map((image, index) => (
            <div
              key={index}
              className={`slider__wrapper ${
                index === sliderIndex ? "" : "hide"
              }`}
            >
              <div className="offer__slider"></div>
              <img
                src={image.src}
                alt={`slide-${index + 1}`}
              />
            </div>
          ))}
          <div className="slider__counter">
            <div className="slider__prev" onClick={prevSlide}>
              <span>
                <box-icon name="left-arrow-alt"></box-icon>
              </span>
            </div>
            <span id="curr">
              {(sliderIndex + 1).toString().padStart(2, "0")}
            </span>
            <span>/</span>
            <span id="total">
              {wrapperImages.length.toString().padStart(2, "0")}
            </span>
            <div className="slider__next" onClick={nextSlide}>
              <span>
                <box-icon name="right-arrow-alt"></box-icon>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Slider;
