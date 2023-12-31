import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { BREAKPONITS, ImageFormat } from "../../utils/constants";
import Carousel from "../Carousel/Carousel";

interface ImageGridProps {
  imagesGridHeight: string;
  imagesGridMaxWidth?: string;
  images: ImageFormat[];
}

interface StyledImageWrap {
  span?: number;
  minWidth?: string;
  height?: string;
  row?: number;
  col?: number;
}

interface StyledImageGrid {
  height: string;
  numberOfImgs: number;
  row: number;
  col: number;
  maxWidth?: string;
}

const MAX_PREVIEW_NUM = 5;

/*----------------------MAIN COMPONENT---------------------- */

export const ImageGridComponent = ({
  imagesGridMaxWidth,
  imagesGridHeight,
  images,
}: ImageGridProps) => {
  // Set State:
  const [rowCol, setRowCol] = useState({ col: 6, row: 2 });
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedImgIndex, setSelectedImgIndex] = useState<number>(-1);
  const newRef = useRef<HTMLInputElement>(null);

  console.log(images);
  const numberOfImgs = images?.length;

  // useEffect to setup all initial render
  useEffect(() => {
    if (numberOfImgs > MAX_PREVIEW_NUM - 1) {
      setRowCol({ col: 6, row: 2 });
      ImageWrap = styled.div<StyledImageWrap>(() => ({
        minWidth: "100%",
        height: "100%",
        overflow: "hidden",
        gridColumn: `auto/ span 2`,
        "&:nth-of-type(1), &:nth-of-type(2)": {
          gridColumn: "auto / span 3",
        },
      }));
    } else if (numberOfImgs > 1) {
      setRowCol({ col: 2, row: 6 });
      ImageWrap = styled.div<StyledImageWrap>(() => ({
        minWidth: "100%",
        height: "100%",
        overflow: "hidden",
        gridRow: `auto/ span ${6 / (numberOfImgs - 1)}`,
        "&:nth-of-type(1)": {
          gridRow: "auto/ span 6",
        },
      }));
    } else {
      setRowCol({ col: 1, row: 1 });
    }
  }, [numberOfImgs]);

  // close Carousel when user press esc
  useEffect(() => {
    const keydownHandler = (event: KeyboardEvent) => {
      event.key === "Escape" && setShowCarousel(false);
    };
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  const openCarousel = (index: number) => {
    setShowCarousel(true);
    setSelectedImgIndex(index);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      event.target instanceof Node &&
      newRef.current &&
      !newRef.current.contains(event.target)
    ) {
      setShowCarousel(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });
  console.log("haha");

  return (
    <>
      {showCarousel ? (
        <div data-testid="carousel">
          <CarouselContainer ref={newRef}>
            <Carousel imgList={images} selectedImgIndex={selectedImgIndex} />
          </CarouselContainer>
        </div>
      ) : (
        <ImageGrid
          height={imagesGridHeight}
          maxWidth={imagesGridMaxWidth}
          numberOfImgs={numberOfImgs}
          row={rowCol.row}
          col={rowCol.col}
          data-testid="imgGrid"
        >
          {numberOfImgs <= MAX_PREVIEW_NUM &&
            images.slice(0, numberOfImgs).map((photo: ImageFormat, index) => (
              <ImageWrap key={index} data-testid="imgWrap">
                <ImageItem
                  id={`${index}`}
                  src={photo.url || "default.jpg"}
                  alt={photo?.alt || "photo"}
                  data-testid="imgItem"
                  role="img"
                  onClick={() => openCarousel(index)}
                />
              </ImageWrap>
            ))}

          {numberOfImgs > MAX_PREVIEW_NUM &&
            images
              .slice(0, MAX_PREVIEW_NUM)
              .map((photo: ImageFormat, index) => (
                <ImageWrap
                  style={{ position: "relative" }}
                  key={index}
                  onClick={() => openCarousel(index)}
                >
                  <ImageItem
                    id={`${index}`}
                    src={photo.url || "default.jpg"}
                    alt={photo?.alt || "photo"}
                  />
                  {index === MAX_PREVIEW_NUM - 1 && (
                    <>
                      <Overlay />
                      <NumberOfRemainingImgs>
                        + {numberOfImgs - MAX_PREVIEW_NUM}
                      </NumberOfRemainingImgs>
                    </>
                  )}
                </ImageWrap>
              ))}
        </ImageGrid>
      )}
    </>
  );
};
export default ImageGridComponent;

/*----------------------EMOTION STYLED---------------------- */
const CarouselContainer = styled.div`
  height: 90vh;
  width: 90vw;
  margin: 0 auto;
  cursor: pointer;
`;

const ImageItem = styled.img`
  object-fit: cover;
  object-position: center;
  min-width: 100%;
  height: 100%;
`;

let ImageWrap = styled.div<StyledImageWrap>`
  height: 100%;
  overflow: hidden;
  position: relative;
  textalign: center;
`;

const ImageGrid = styled.div<StyledImageGrid>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, 1fr);
  grid-template-rows: repeat(${(props) => props.row}, 1fr);
  height: ${(props) => (props.height ? props.height : "20rem")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};
  gap: 0.3rem;
  margin: 0 auto;
  cursor: pointer;
  caret-color: transparent;

  ${BREAKPONITS.small} {
    gap: 0.4rem;
  }
  ${BREAKPONITS.tablet} {
    gap: 0.5rem;
  }
  ${BREAKPONITS.large} {
    gap: 0.6 rem;
  }
  ${BREAKPONITS.wide} {
    gap: 0.8 rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
const NumberOfRemainingImgs = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.5rem;
  text-shadow: 1px 1px 3px grey;
  z-index: 100;
  font-weight: 700;
`;
