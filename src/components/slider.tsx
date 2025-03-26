import React from "react";
import Slider from "react-infinite-logo-slider";

type ImageSliderProps = {
  images: string[];
  width?: string;
  duration?: number;
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  width = "200px",
  duration = 15,
}) => {
  return (
    <Slider
      width={width}
      duration={duration}
      pauseOnHover={true}
      blurBorders={true}
      blurBorderColor={"#000000"}
    >
      {images.map((src, index) => (
        <Slider.Slide key={index}>
          <img src={src} alt={`slide-${index}`} className="w-6 md:w-8" />
        </Slider.Slide>
      ))}
    </Slider>
  );
};

export default ImageSlider;
