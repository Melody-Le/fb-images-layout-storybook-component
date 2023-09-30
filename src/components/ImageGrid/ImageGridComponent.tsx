import { ReactNode, useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
const accessKey = "kne3nTv7__ntufHd-qCFdSEZifJvlmPDyOVwha9jWqU";
const unsplashUrl = `https://api.unsplash.com/photos/?client_id=${accessKey}`;

interface ImageGridProps {
  numberOfImgs: number;
  imagesGridHeight: string;
  imagesGridMaxWidth?: string;
  showModal?: boolean;
  className?: string;
  children?: ReactNode;
}

interface StyledComponentProps {
  span?: number;
  height?: string;
  maxWidth?: string;
  numberOfImgs?: number;
  row?: number;
  col?: number;
  minWidth?: string;
}

const ImageItem = styled.img`
  object-fit: cover;
  object-position: "center";
  min-width: 100%;
  height: 100%;
`;

let ImageWrap = styled("div")<StyledComponentProps>((props) => ({
  minWidth: "100%",
  height: "100%",
  overflow: "hidden",
}));

const ImageGrid = styled.div<StyledComponentProps>`
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

/*----------------------MAIN COMPONENT---------------------- */

const ImageGridComponent = ({
  className = "",
  numberOfImgs = 1,
  showModal = false,
  imagesGridMaxWidth,
  imagesGridHeight,
}: ImageGridProps) => {
  // Set State:
  const [rowCol, setRowCol] = useState({ col: 6, row: 2 });
  const [randomPhotos, setRandoPhotos] = useState([]);

  // useEffect to setup all initial render
  useEffect(() => {
    randomPhotos.length = numberOfImgs;
    if (numberOfImgs > 4) {
      setRowCol({ col: 6, row: 2 });
      ImageWrap = styled("div")<StyledComponentProps>((props) => ({
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
      ImageWrap = styled("div")<StyledComponentProps>((props) => ({
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

  // to avoid bug undefined url when user change number of images
  type unsplashPhotoFortmat = {
    id: string;
    url: string;
    alt: string;
    urls: { regular: string };
    alt_description: string;
  };

  /*----------------------FETCH RANDOM IMAGES ---------------------- */

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(unsplashUrl);
        const data = response.data; // this will return 10 results
        const slicedArray = data
          .slice(0, numberOfImgs)
          .map(function (item: unsplashPhotoFortmat) {
            return {
              id: item.id,
              url: item.urls.regular,
              alt: item.alt_description,
            };
          });
        setRandoPhotos(slicedArray);
      } catch (error) {}
    }
    getData();
  }, [numberOfImgs]);
  return (
    <ImageGrid
      height={imagesGridHeight}
      maxWidth={imagesGridMaxWidth}
      numberOfImgs={numberOfImgs}
      row={rowCol.row}
      col={rowCol.col}
      className={className}
    >
      {randomPhotos.map((photo: unsplashPhotoFortmat, index) => (
        <ImageWrap>
          <ImageItem src={photo.url || ""} alt={photo?.alt || ""} />
        </ImageWrap>
      ))}
    </ImageGrid>
  );
};
export default ImageGridComponent;
