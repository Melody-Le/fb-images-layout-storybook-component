import React, { FC, ReactNode, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { number } from "prop-types";

export type Props = {};
const exampleImages = [
  "https://i.pinimg.com/564x/0f/71/0b/0f710bb81c2ff1aff8976239c18acfd2.jpg",
  "https://i.pinimg.com/564x/57/37/e8/5737e8017b1c6946a6eb25b6db03a72e.jpg",
  "https://i.pinimg.com/736x/55/ea/08/55ea0881688047362cb6d23f47166b65.jpg",
  "https://i.pinimg.com/564x/48/40/05/4840054e287358f6b95e6dacfe395f2b.jpg",
  "https://i.pinimg.com/564x/9c/82/a0/9c82a08a4a0e3b581122ab2576f1c07d.jpg",
  "https://i.pinimg.com/564x/08/d1/67/08d167851acc6b5ca15785aab6825f23.jpg",
  "https://i.pinimg.com/564x/4d/83/05/4d8305746c0a7fe3a5708ef300367aec.jpg",
];

interface ImageGridProps {
  className?: string;
  numberOfImgs?: number;
  images?: Array<string>;
  showModal?: boolean;
  imagesGridWidth?: string;
  imagesGridHeight?: string;
  children?: ReactNode;
}

interface StyledComponentProps {
  span?: number;
  height?: string;
  width?: string;
  numberOfImgs?: number;
  row?: number;
  col?: number;
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

// FIXME: can not do props.numberOfImgs > 5 , it will show undifined
const ImageGrid = styled.div<StyledComponentProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, 1fr);
  grid-template-rows: repeat(${(props) => props.row}, 1fr);
  height: ${(props) => (props.height ? props.height : "20rem")};
  width: ${(props) => (props.width ? props.width : "40rem")};
  gap: 0.5rem;
`;
/*----------------------MAIN COMPONENT---------------------- */

const ImageGridComponent = ({
  className = "",
  numberOfImgs = 1,
  images = [
    "https://i.pinimg.com/564x/0f/71/0b/0f710bb81c2ff1aff8976239c18acfd2.jpg",
    "https://i.pinimg.com/564x/57/37/e8/5737e8017b1c6946a6eb25b6db03a72e.jpg",
    "https://i.pinimg.com/736x/55/ea/08/55ea0881688047362cb6d23f47166b65.jpg",
    "https://i.pinimg.com/564x/48/40/05/4840054e287358f6b95e6dacfe395f2b.jpg",
    "https://i.pinimg.com/564x/9c/82/a0/9c82a08a4a0e3b581122ab2576f1c07d.jpg",
  ],
  showModal = false,
  imagesGridWidth,
  imagesGridHeight,
}: ImageGridProps) => {
  const [rowCol, setRowCol] = useState({ col: 6, row: 2 });

  // useEffect to setup all initial render
  useEffect(() => {
    images.length = numberOfImgs;
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
  }, [numberOfImgs, images]);

  // to avoid bug undefined url when user change number of images
  useEffect(() => {
    for (let i = 0; i < numberOfImgs; i++) {
      images[i] = exampleImages[i];
    }
  }, [numberOfImgs]);

  return (
    <ImageGrid
      height={imagesGridHeight}
      width={imagesGridWidth}
      numberOfImgs={numberOfImgs}
      row={rowCol.row}
      col={rowCol.col}
    >
      {images.map((img, index) => (
        <ImageWrap>
          <ImageItem src={img} />
        </ImageWrap>
      ))}
    </ImageGrid>
  );
};
export default ImageGridComponent;
