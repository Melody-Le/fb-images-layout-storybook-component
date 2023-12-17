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

  // useEffect(() => {}, [imgIndex]);

  return (
    <CarouselWrapper>
      <ImageSliderContainer>
        {imgList.map((item, idx) => (
          <ImageSlider
            key={idx}
            aria-label={`img-slider`}
            src={item.url}
            alt={item.alt}
            style={{
              translate: `${-100 * imgIndex}%`,
            }}
            data-visible={idx === imgIndex ? true : false}
            data-testid={`img-slider-${idx}`}
          />
        ))}
      </ImageSliderContainer>
      <SliderLeftBtn onClick={showPrevious} />
      <SliderRightBtn onClick={showNext} />
      <IndicatorBtnContainer>
        {imgList.map((_, index) =>
          index === imgIndex ? (
            <IndicatorButton
              data-testid={`indicator-btn-${index}`}
              aria-label="indicator-btn"
              key={index}
              onClick={() => {
                setImgIndex(index);
              }}
              data-active={true}
            />
          ) : (
            <IndicatorButtonInactive
              data-testid={`indicator-btn-${index}`}
              aria-label="indicator-btn"
              key={index}
              onClick={() => {
                setImgIndex(index);
              }}
              data-active={false}
            />
          )
        )}
      </IndicatorBtnContainer>

      <IndicatorImgContainer>
        {imgList.map((item, index) =>
          index === imgIndex ? (
            <IndicatorImg
              aria-label="indicator-img"
              key={index}
              src={item.url}
              data-active={true}
            />
          ) : (
            <IndicatorImgInactive
              aria-label="indicator-img"
              key={index}
              src={item.url}
              onClick={() => {
                setImgIndex(index);
              }}
              data-active={false}
            />
          )
        )}
      </IndicatorImgContainer>
    </CarouselWrapper>
  );
}

export default Carousel;

/*----------------------EMOTION STYLED---------------------- */

const CarouselWrapper = styled.div`
  width: 90vw;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  justify-content: center;
  align-items: center;
  caret-color: transparent;
`;

const ImageSliderContainer = styled.div`
  overflow: hidden;
  display: flex;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 7px #666;
`;

const ImageSlider = styled.img`
  flex-grow: 1;
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
  align-items: center;
`;

const IndicatorBtnContainer = styled(IndicatorContainer)`
  flex-basis: 1rem;
`;

const IndicatorImgContainer = styled(IndicatorContainer)`
  flex-shrink: 0;
  overflow-x: hidden;
  flex-basis: 5rem;
  padding: 1rem;
  &:hover {
    overflow-x: scroll;
  }
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
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0px 0px 5px #555;
  border: 2px yellow solid;
  border-radius: 0.5rem;
  transition: scale 100ms ease-in-out;
  aspect-ratio: 1 / 1;
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
