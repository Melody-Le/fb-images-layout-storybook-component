import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { BREAKPONITS } from "../../utils/constants";
import Carousel from "../Carousel/Carousel";

interface ImageGridProps {
  // numberOfImgs: number;
  imagesGridHeight: string;
  imagesGridMaxWidth?: string;
  showModal?: boolean;
  images: { id: string; url: string; alt: string }[];
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

interface UnsplashPhotoFortmat {
  id: string;
  url: string;
  alt: string;
}

const MAX_PREVIEW_NUM = 5;

/*----------------------MAIN COMPONENT---------------------- */

const ImageGridComponent = ({
  // numberOfImgs = 1,
  showModal = true,
  imagesGridMaxWidth,
  imagesGridHeight,
  images,
}: ImageGridProps) => {
  // Set State:
  const [rowCol, setRowCol] = useState({ col: 6, row: 2 });
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedImgIndex, setSelectedImgIndex] = useState<number>(-1);

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
    const keydownHandler = (evnt: KeyboardEvent) => {
      evnt.key === "Escape" && setShowCarousel(false);
    };
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  const useCarousel = (index: number) => {
    showModal && setShowCarousel(true);
    setSelectedImgIndex(index);
  };
  const closeCarousel = () => {
    setShowCarousel(false);
  };
  return (
    <div
      className="container"
      onClick={(evnt) => {
        // debug this using this page: https://www.reddit.com/r/typescript/comments/v5hzws/property_classname_does_not_exist_on_type/
        const target = evnt.target as HTMLTextAreaElement;
        const element = target.className;
        if (element === "container") {
          setShowCarousel(false);
        }
      }}
    >
      {showCarousel ? (
        <>
          <div
            style={{
              height: "90vh",
              maxWidth: "90%",
              margin: "0 auto",
              cursor: "pointer",
            }}
          >
            <Carousel imgList={images} selectedImgIndex={selectedImgIndex} />
          </div>
        </>
      ) : (
        <ImageGrid
          height={imagesGridHeight}
          maxWidth={imagesGridMaxWidth}
          numberOfImgs={numberOfImgs}
          row={rowCol.row}
          col={rowCol.col}
        >
          {numberOfImgs <= MAX_PREVIEW_NUM &&
            images
              .slice(0, numberOfImgs)
              .map((photo: UnsplashPhotoFortmat, index) => (
                <ImageWrap key={index} onClick={useCarousel.bind(this, index)}>
                  <ImageItem
                    src={photo.url || "default.jpg"}
                    alt={photo?.alt || "photo"}
                  />
                </ImageWrap>
              ))}

          {numberOfImgs > MAX_PREVIEW_NUM &&
            images
              .slice(0, MAX_PREVIEW_NUM)
              .map((photo: UnsplashPhotoFortmat, index) => (
                <ImageWrap
                  style={{ position: "relative" }}
                  key={index}
                  onClick={useCarousel.bind(this, index)}
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
    </div>
  );
};
export default ImageGridComponent;

/*----------------------EMOTION STYLED---------------------- */

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
