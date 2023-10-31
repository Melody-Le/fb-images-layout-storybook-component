import { ReactNode, useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import UseUnsplashApi from "../../hooks/useUnsplashApi";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
interface ImageGridProps {
  numberOfImgs: number;
  imagesGridHeight: string;
  imagesGridMaxWidth?: string;
  showModal?: boolean;
  images: [string];
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
  images: [string];
}

interface UnsplashPhotoFortmat {
  id: string;
  url: string;
  alt: string;
  urls: { regular: string };
  alt_description: string;
}

/*----------------------MAIN COMPONENT---------------------- */

const ImageGridComponent = ({
  numberOfImgs = 1,
  showModal = false,
  imagesGridMaxWidth,
  imagesGridHeight,
  images = [""],
}: ImageGridProps) => {
  // Set State:
  const [rowCol, setRowCol] = useState({ col: 6, row: 2 });
  const [randomPhotos, setRandoPhotos] = useState([]);

  // useEffect to setup all initial render
  useEffect(() => {
    randomPhotos.length = numberOfImgs;
    if (numberOfImgs > 4) {
      setRowCol({ col: 6, row: 2 });
      ImageWrap = styled.div<StyledImageWrap>((props) => ({
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
      ImageWrap = styled.div<StyledImageWrap>((props) => ({
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
  }, [numberOfImgs, randomPhotos]);

  /*----------------------FETCH RANDOM IMAGES ---------------------- */

  useEffect(() => {
    const getUnsplashPhotos = async () => {
      const photos = await UseUnsplashApi(numberOfImgs);
      setRandoPhotos(photos);
    };
    getUnsplashPhotos();
  }, [numberOfImgs]);

  return (
    <ImageGrid
      height={imagesGridHeight}
      maxWidth={imagesGridMaxWidth}
      numberOfImgs={numberOfImgs}
      row={rowCol.row}
      col={rowCol.col}
      images={images}
    >
      {randomPhotos.map((photo: UnsplashPhotoFortmat, index) => (
        <ImageWrap>
          <ImageItem
            src={photo.url || "default.jpg"}
            alt={photo?.alt || "photo"}
          />
        </ImageWrap>
      ))}
    </ImageGrid>
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
}));

const ImageGrid = styled.div<StyledImageGrid>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, 1fr);
  grid-template-rows: repeat(${(props) => props.row}, 1fr);
  height: ${(props) => (props.height ? props.height : "20rem")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};
  gap: 0.3rem;
  margin: 0 auto;
  ${mq[0]} {
    gap: 0.4rem;
  }
  ${mq[1]} {
    gap: 0.5rem;
  }
  ${mq[2]} {
    gap: 0.6 rem;
  }
  ${mq[3]} {
    gap: 0.8 rem;
  }
`;
