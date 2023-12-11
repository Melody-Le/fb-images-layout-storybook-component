import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { ImageFormat } from "../../utils/constants";
interface ImageProps {
  imgList: ImageFormat[];
  selectedImgIndex: number;
}

function Carousel({ imgList, selectedImgIndex }: ImageProps) {
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
  useEffect(() => {
    setImgIndex(selectedImgIndex);
  }, [selectedImgIndex]);
  return (
    <CarouselWrapper>
      <ImageSliderContainer>
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
      </ImageSliderContainer>
      <SliderLeftBtn onClick={showPrevious} />
      <SliderRightBtn onClick={showNext} />
      <IndicatorContainer>
        {imgList.map((_, index) =>
          index === imgIndex ? (
            <IndicatorButton
              key={index}
              onClick={() => {
                setImgIndex(index);
              }}
            />
          ) : (
            <IndicatorButtonInactive
              key={index}
              onClick={() => {
                setImgIndex(index);
              }}
            />
          )
        )}
      </IndicatorContainer>

      <IndicatorContainer>
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
      </IndicatorContainer>
    </CarouselWrapper>
  );
}

export default Carousel;

/*----------------------EMOTION STYLED---------------------- */

const CarouselWrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

const ImageSliderContainer = styled.div`
  overflow: hidden;
  display: flex;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 7px #666;
`;

const ImageSlider = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  display: block;
  flex-shrink: 0;
  flex-grow: 0;
  transition: translate 300ms ease-in-out;
`;

const SliderLeftBtn = styled(BsArrowLeftCircleFill)`
  position: absolute;
  width: 2rem;
  height: 2rem;
  color: white;
  filter: drop-shadow(0px 0px 5px #555);
  left: 1rem;
`;
const SliderRightBtn = styled(BsArrowRightCircleFill)`
  position: absolute;
  width: 2rem;
  height: 2rem;
  color: white;
  filter: drop-shadow(0px 0px 5px #555);
  right: 1rem;
`;

const IndicatorContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

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
  border: 2px yellow solid;
  border-radius: 0.5rem;
  transition: scale 100ms ease-in-out;
  &:hover {
    scale: 1.05;
    filter: saturate(0) brightness(0.7) contrast(3);
    mix-blend-mode: multiply;
    filter: grayscale(0);
  }
`;
const IndicatorImgInactive = styled(IndicatorImg)`
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  border: none;
`;
