import React, { FC, ReactNode } from "react";
import styled from "@emotion/styled";

export type Props = {};

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
}

const ImageItem = styled.img`
  object-fit: cover;
  object-position: "center";
  min-width: 100%;
  height: 100%;
`;

// const ImageWrapTest = styled.div<StyledComponentProps>`
//   min-width: 100%;
//   height: 100%;
//   overflow: hidden;
//   grid-column: auto / span ${(props) => (props.span ? props.span : 2)};
// `;

const ImageWrap = styled("div")(() => ({
  minWidth: "100%",
  height: "100%",
  overflow: "hidden",
  gridColumn: "auto / span 2",
  "&:nth-of-type(1), &:nth-of-type(2)": {
    gridColumn: "auto / span 3",
  },
}));

const ImageGrid = styled.div<StyledComponentProps>`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
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
  return (
    <ImageGrid height={imagesGridHeight} width={imagesGridWidth}>
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
