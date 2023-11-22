import React from "react";
import styled from "@emotion/styled";
import "./Carousel.css";

interface ImageProps {
  imgList: { id: string; url: string; alt: string }[];
}

function Carousel({ imgList }: ImageProps) {
  return (
    <div style={{ width: "100%", aspectRatio: "1:1", position: "relative" }}>
      <div>
        {imgList.map((item, idx) => (
          <img key={idx} src={item.url} alt={item.alt} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
