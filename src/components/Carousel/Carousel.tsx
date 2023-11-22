import React from "react";

type ImageProps = {
  imgList: { id: string; url: string; alt: string }[];
};

function Carousel({ imgList }: ImageProps) {
  console.log(imgList);
  return <div>haha</div>;
}

export default Carousel;
