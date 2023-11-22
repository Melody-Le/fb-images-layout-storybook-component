import React, { useState } from "react";
import styled from "@emotion/styled";
import "./Carousel.css";
import { PiArrowFatLeft, PiArrowFatRight } from "react-icons/pi";
import { FaRegCircle, FaRegCircleDot } from "react-icons/fa6";

interface ImageProps {
  imgList: { url: string; alt: string }[];
}

function Carousel({ imgList }: ImageProps) {
  const [imgIndex, setImgIndex] = useState(0);
  const showNext = () => {
    setImgIndex((prevState) =>
      prevState === imgList.length - 1 ? 0 : prevState + 1
    );
  };
  const showPrevious = () => {
    setImgIndex((prevState: number) =>
      prevState === 0 ? imgList.length - 1 : prevState - 1
    );
  };
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          width: "100%",
          // height: "100%",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {imgList.map((item, idx) => (
          <ImageSlider
            key={idx}
            src={item.url}
            alt={item.alt}
            style={{
              translate: `${-100 * imgIndex}%`,
            }}
          />
        ))}
      </div>
      <ImgSliderButton
        onClick={showPrevious}
        className="img-slider-btn"
        style={{ left: 0 }}
      >
        <PiArrowFatLeft />
      </ImgSliderButton>
      <ImgSliderButton
        onClick={showNext}
        className="img-slider-btn"
        style={{ right: 0 }}
      >
        <PiArrowFatRight />
      </ImgSliderButton>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          display: "flex",
          gap: "0.25rem",
        }}
      >
        {imgList.map((_, index) =>
          index === imgIndex ? (
            <Indicator
              onClick={() => {
                setImgIndex(index);
              }}
            />
          ) : (
            <IndicatorInactive
              onClick={() => {
                setImgIndex(index);
              }}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Carousel;

const ImageSlider = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
  flex-shrink: 0;
  flex-grow: 0;
  transition: translate 300ms ease-in-out;
`;
const ImgSliderButton = styled.button`
  all: unset;
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  cursor: pointer;
  padding: 1rem;
  transition: background-color 100ms ease-in-out;
`;
const Indicator = styled.button`
  all: unset;
  background-color: white;
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 100%;
  box-shadow: 0px 0px 5px #555;
  margin: 0 0.2rem;
  cursor: pointer;
`;

const IndicatorInactive = styled(Indicator)`
  background-color: grey;
`;
