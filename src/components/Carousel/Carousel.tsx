import React from "react";
import styled from "@emotion/styled";
import "./Carousel.css";

interface ImageProps {
  imgList: { id: string; url: string; alt: string }[];
}

function Carousel({ imgList }: ImageProps) {
  return (
    <div style={{ width: "100%", aspectRatio: "1:1", position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {imgList.map((item, idx) => (
          <ImageSlider
            key={idx}
            src={item.url}
            alt={item.alt}
            // style={{
            //   translate: `${-100 * idx}%`,
            // }}
          />
        ))}
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
