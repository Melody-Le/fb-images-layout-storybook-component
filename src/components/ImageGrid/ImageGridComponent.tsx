import React, { FC, ReactNode, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { number } from "prop-types";

export type Props = {};
const num = 3;

interface ImageGridProps {
  className?: string;
  numberOfImgs?: number;
  showModal?: boolean;
  imagesGridWidth?: string;
  imagesGridHeight?: string;
  children?: ReactNode;
}

interface ImageWrapProps {
  className?: string;
  gridColumn?: string;
  children?: ReactNode;
}

interface StyledComponentProps {
  span?: number;
  height?: string;
  width?: string;
  numberOfImgs?: number;
  row?: number;
  col?: number;
  spanRow?: number;
  spanCol?: number;
}

const ImageItem = styled.img`
  object-fit: cover;
  object-position: "center";
  min-width: 100%;
  height: 100%;
`;
// const ImageWrap = styled("div")<StyledComponentProps>({
//   minWidth: "100%",
//   height: "100%",
//   overflow: "hidden",
//   gridColumn: "auto / span 2",
//   "&:nth-of-type(1), &:nth-of-type(2)": {
//     gridColumn: "auto / span 3",
//   },
// });

// const ImageWrap = styled("div")(() => ({
//   minWidth: "100%",
//   height: "100%",
//   overflow: "hidden",
//   gridColumn: "auto / span 2",
//   "&:nth-of-type(1), &:nth-of-type(2)": {
//     gridColumn: "auto / span 3",
//   },
// }));

let ImageWrap = styled("div")<StyledComponentProps>((props) => ({
  minWidth: "100%",
  height: "100%",
  overflow: "hidden",
  // gridColumn: `auto/ span 2`,
  // "&:nth-of-type(1), &:nth-of-type(2)": {
  //   gridColumn: "auto / span 3",
  // },

  gridRow: `auto/ span ${props.spanRow}`,
  "&:nth-of-type(1)": {
    gridRow: "auto/ span 6",
  },

  // "&:nth-of-type(1)": {
  //   gridRow: `${(props: { numberOfImgs: number }) =>
  //     props.numberOfImgs < 5 && "auto/ span 6"}`,
  // },
}));

// const ImageWrap = styled("div")<StyledComponentProps>({
//   minWidth: "100%",
//   height: "100%",
//   overflow: "hidden",
//   gridColumn: "auto / span 2",
//   "&:nth-of-type(1), &:nth-of-type(2)": {
//     gridColumn: "auto / span 3",
//   },
//   "&:nth-of-type(1)": {
//     gridRow: `${(props: { numberOfImgs: number }) =>
//       props.numberOfImgs < 5 && "auto/ span 6"}`,
//   },
// });

// const ImageWrap = styled("div")<StyledComponentProps>`
//   minwidth: "100%";
//   height: "100%";
//   overflow: "hidden";
//   grid-column: "auto / span 2";
//   &:nth-of-type(1), &:nth-of-type(2): {
//     gridColumn: "auto / span 3",
//   },
// `;

// FIXME: can not do props.numberOfImgs > 5 , it will show undifined
const ImageGrid = styled.div<StyledComponentProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, 1fr);
  grid-template-rows: repeat(${(props) => props.row}, 1fr);
  height: ${(props) => (props.height ? props.height : "20rem")};
  width: ${(props) => (props.width ? props.width : "40rem")};
  gap: 0.5rem;
`;

const ImageGridComponent = ({
  className = "",
  numberOfImgs = 1,
  showModal = false,
  imagesGridWidth,
  imagesGridHeight,
}: ImageGridProps) => {
  const images = [
    "https://i.pinimg.com/564x/0f/71/0b/0f710bb81c2ff1aff8976239c18acfd2.jpg",
    "https://i.pinimg.com/564x/57/37/e8/5737e8017b1c6946a6eb25b6db03a72e.jpg",
    "https://i.pinimg.com/736x/55/ea/08/55ea0881688047362cb6d23f47166b65.jpg",
    "https://i.pinimg.com/564x/48/40/05/4840054e287358f6b95e6dacfe395f2b.jpg",
    "https://i.pinimg.com/564x/9c/82/a0/9c82a08a4a0e3b581122ab2576f1c07d.jpg",
    "https://i.pinimg.com/564x/2b/7f/a9/2b7fa911454725f7fd5b9d2f4dd41046.jpg",
  ];
  const [rowCol, setRowCol] = useState({ col: 6, row: 2 });
  const [span, setSpan] = useState({ col: 1, row: 1 });

  useEffect(() => {
    if (numberOfImgs > 4) {
      setRowCol({ col: 6, row: 2 });
      setSpan({ col: 2, row: 1 });
      ImageWrap = styled("div")<StyledComponentProps>((props) => ({
        minWidth: "100%",
        height: "100%",
        overflow: "hidden",
        gridColumn: `auto/ span 2`,
        "&:nth-of-type(1), &:nth-of-type(2)": {
          gridColumn: "auto / span 3",
        },
      }));
    } else {
      setRowCol({ col: 2, row: 6 });
      setSpan({ col: 1, row: 6 / (numberOfImgs - 1) });
      ImageWrap = styled("div")<StyledComponentProps>((props) => ({
        minWidth: "100%",
        height: "100%",
        overflow: "hidden",
        gridRow: `auto/ span ${6 / (numberOfImgs - 1)}`,
        "&:nth-of-type(1)": {
          gridRow: "auto/ span 6",
        },
      }));
    }
  }, [numberOfImgs]);

  useEffect(() => {}, [numberOfImgs]);

  return (
    <ImageGrid
      height={imagesGridHeight}
      width={imagesGridWidth}
      numberOfImgs={numberOfImgs}
      row={rowCol.row}
      col={rowCol.col}
      spanRow={span.row}
      spanCol={span.col}
    >
      <ImageWrap>
        <ImageItem src={images[1]} />
      </ImageWrap>
      <ImageWrap>
        <ImageItem src={images[2]} />
      </ImageWrap>
      <ImageWrap>
        <ImageItem src={images[3]} />
      </ImageWrap>
      <ImageWrap>
        <ImageItem src={images[4]} />
      </ImageWrap>
      <ImageWrap>
        <ImageItem src={images[5]} />
      </ImageWrap>
    </ImageGrid>
  );
};
export default ImageGridComponent;
