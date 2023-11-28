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

const ImageGridComponent = ({
  imagesGridMaxWidth,
  imagesGridHeight,
  images,
}: ImageGridProps) => {
  // Set State:
  const [rowCol, setRowCol] = useState({ col: 6, row: 2 });
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedImgIndex, setSelectedImgIndex] = useState<number>(-1);
  const newRef = useRef<HTMLInputElement>(null);

  const numberOfImgs = images.length;

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

  return (
    <>
      {showCarousel ? (
        <CarouselContainer ref={newRef}>
          <Carousel imgList={images} selectedImgIndex={selectedImgIndex} />
        </CarouselContainer>
      ) : (
        <ImageGrid
          height={imagesGridHeight}
          maxWidth={imagesGridMaxWidth}
          numberOfImgs={numberOfImgs}
          row={rowCol.row}
          col={rowCol.col}
        >
          {numberOfImgs <= MAX_PREVIEW_NUM &&
            images.slice(0, numberOfImgs).map((photo: ImageFormat, index) => (
              <ImageWrap key={index} onClick={() => openCarousel(index)}>
                <ImageItem
                  src={photo.url || "default.jpg"}
                  alt={photo?.alt || "photo"}
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
                    src={photo.url || "default.jpg"}
                    alt={photo?.alt || "photo"}
                  />
                  {index === MAX_PREVIEW_NUM - 1 && (
                    <NumberOfRemainingImgs>
                      + {numberOfImgs - MAX_PREVIEW_NUM}
                    </NumberOfRemainingImgs>
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
  object-position: "center";
  min-width: 100%;
  height: 100%;
`;

let ImageWrap = styled.div<StyledImageWrap>`
  height: "100%",
  overflow: "hidden",
  position: "relative",
  textAlign: "center",
  color: "blue",
  backgroundColor: "yellow",`;

const ImageGrid = styled.div<StyledImageGrid>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, 1fr);
  grid-template-rows: repeat(${(props) => props.row}, 1fr);
  height: ${(props) => (props.height ? props.height : "20rem")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};
  gap: 0.3rem;
  margin: 0 auto;
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
const NumberOfRemainingImgs = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.5rem;
`;
