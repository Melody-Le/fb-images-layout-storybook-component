import React, { useState } from "react";
import styled from "@emotion/styled";
import "./Carousel.css";
import { PiArrowFatLeft, PiArrowFatRight } from "react-icons/pi";
import { FaRegCircle, FaRegCircleDot } from "react-icons/fa6";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

interface ImageProps {
  imgList: { url: string; alt: string }[];
  closeCarousel: () => void;
}

function Carousel({ imgList, closeCarousel }: ImageProps) {
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
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        rowGap: "0.5rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
          borderRadius: "0.5rem",
          boxShadow: "0px 0px 7px #666",
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
      <SliderLeftBtn onClick={showPrevious} style={{ left: "1rem" }} />
      <SliderRightBtn onClick={showNext} style={{ right: "1rem" }} />
      <div
        style={{
          display: "flex",
          gap: "0.25rem",
        }}
      >
        {imgList.map((_, index) =>
          index === imgIndex ? (
            <IndicatorButton
              onClick={() => {
                setImgIndex(index);
              }}
            />
          ) : (
            <IndicatorButtonInactive
              onClick={() => {
                setImgIndex(index);
              }}
            />
          )
        )}
      </div>

      <div
        style={{
          display: "flex",
          gap: "0.25rem",
        }}
      >
        {imgList.map((item, index) =>
          index === imgIndex ? (
            <IndicatorImg
              key={index}
              src={item.url}
              onClick={() => {
                setImgIndex(index);
              }}
            />
          ) : (
            <IndicatorImgInactive
              key={index}
              src={item.url}
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

/*----------------------EMOTION STYLED---------------------- */

const ImageSlider = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  display: block;
  flex-shrink: 0;
  flex-grow: 0;
  transition: translate 300ms ease-in-out;
`;

// think way to avoid repeated of SliderLeftBtn & SliderRightBtn
const SliderLeftBtn = styled(BsArrowLeftCircleFill)`
  position: absolute;
  width: 2rem;
  height: 2rem;
  color: white;
  filter: drop-shadow(0px 0px 5px #555);
`;
const SliderRightBtn = styled(BsArrowRightCircleFill)`
  position: absolute;
  width: 2rem;
  height: 2rem;
  color: white;
  filter: drop-shadow(0px 0px 5px #555);
`;

//TODO: issue of showing blinking củo in these button

const IndicatorButton = styled.button`
  all: unset;
  background-color: white;
  height: 0.6rem;
  width: 0.6rem;
  border-radius: 100%;
  box-shadow: 0px 0px 5px #555;
  margin: 0 0.2rem;
  cursor: pointer;
  transition: scale 100ms ease-in-out;
  &:hover {
    scale: 1.5;
  }
`;

const IndicatorButtonInactive = styled(IndicatorButton)`
  background-color: grey;
`;

const IndicatorImg = styled.img`
  outline: none;
  margin: 0 0.2rem;
  cursor: pointer;
  width: 100px;
  height: 100px;
  object-fit: cover;
  box-shadow: 0px 0px 5px #555;
  border: 2px black solid;
  border-radius: 0.5rem;
`;
const IndicatorImgInactive = styled(IndicatorImg)`
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  border: none;
`;
