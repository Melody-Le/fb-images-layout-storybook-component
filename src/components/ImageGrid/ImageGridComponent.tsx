import { useState, useEffect } from "react";
import styled from "@emotion/styled";
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

/*----------------------MAIN COMPONENT---------------------- */

const ImageGridComponent = ({
  // numberOfImgs = 1,
  showModal = false,
  imagesGridMaxWidth,
  imagesGridHeight,
  images,
}: ImageGridProps) => {
  // Set State:
  const [rowCol, setRowCol] = useState({ col: 6, row: 2 });
  const [showCarousel, setShowCarousel] = useState(false);

  const numberOfImgs = images.length;

  // useEffect to setup all initial render
  useEffect(() => {
    if (numberOfImgs > 4) {
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

  const useCarousel = () => {
    showModal && setShowCarousel(true);
  };

  return (
    <div>
      {showCarousel ? (
        <>
          <div
            style={{
              maxWidth: "300px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <Carousel imgList={images} />
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
          {numberOfImgs <= 5 &&
            images
              .slice(0, numberOfImgs)
              .map((photo: UnsplashPhotoFortmat, index) => (
                <ImageWrap key={index}>
                  <ImageItem
                    src={photo.url || "default.jpg"}
                    alt={photo?.alt || "photo"}
                    onClick={useCarousel}
                  />
                </ImageWrap>
              ))}

          {numberOfImgs > 5 &&
            images.slice(0, 5).map((photo: UnsplashPhotoFortmat, index) => (
              <ImageWrap style={{ position: "relative" }} key={index}>
                <ImageItem
                  src={photo.url || "default.jpg"}
                  alt={photo?.alt || "photo"}
                  onClick={useCarousel}
                />
                {index === 4 && (
                  <p
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "white",
                      fontSize: "1.5rem",
                    }}
                  >
                    + {numberOfImgs - 5}
                  </p>
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

let ImageWrap = styled.div<StyledImageWrap>((props) => ({
  minWidth: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  textAlign: "center",
  color: "blue",
  backgroundColor: "yellow",
}));

enum BreakPoints {
  small = `@media (min-width: 576px)`,
  tablet = `@media (min-width: 768px)`,
  large = `@media (min-width: 992px)`,
  wide = `@media (min-width: 1200px)`,
}

const ImageGrid = styled.div<StyledImageGrid>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, 1fr);
  grid-template-rows: repeat(${(props) => props.row}, 1fr);
  height: ${(props) => (props.height ? props.height : "20rem")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};
  gap: 0.3rem;
  cursor: pointer;
  margin: 0 auto;
  ${BreakPoints.small} {
    gap: 0.4rem;
  }
  ${BreakPoints.tablet} {
    gap: 0.5rem;
  }
  ${BreakPoints.large} {
    gap: 0.6 rem;
  }
  ${BreakPoints.wide} {
    gap: 0.8 rem;
  }
`;
