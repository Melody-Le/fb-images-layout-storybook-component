import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { BREAKPONITS } from "../../utils/constants";
import Carousel from "../Carousel/Carousel";
const MAX_PREVIEW_NUM = 5;
/*----------------------MAIN COMPONENT---------------------- */
export const ImageGridComponent = ({ imagesGridMaxWidth, imagesGridHeight, images, }) => {
    // Set State:
    const [rowCol, setRowCol] = useState({ col: 6, row: 2 });
    const [showCarousel, setShowCarousel] = useState(false);
    const [selectedImgIndex, setSelectedImgIndex] = useState(-1);
    const newRef = useRef(null);
    console.log(images);
    const numberOfImgs = images === null || images === void 0 ? void 0 : images.length;
    // useEffect to setup all initial render
    useEffect(() => {
        if (numberOfImgs > MAX_PREVIEW_NUM - 1) {
            setRowCol({ col: 6, row: 2 });
            ImageWrap = styled.div(() => ({
                minWidth: "100%",
                height: "100%",
                overflow: "hidden",
                gridColumn: `auto/ span 2`,
                "&:nth-of-type(1), &:nth-of-type(2)": {
                    gridColumn: "auto / span 3",
                },
            }));
        }
        else if (numberOfImgs > 1) {
            setRowCol({ col: 2, row: 6 });
            ImageWrap = styled.div(() => ({
                minWidth: "100%",
                height: "100%",
                overflow: "hidden",
                gridRow: `auto/ span ${6 / (numberOfImgs - 1)}`,
                "&:nth-of-type(1)": {
                    gridRow: "auto/ span 6",
                },
            }));
        }
        else {
            setRowCol({ col: 1, row: 1 });
        }
    }, [numberOfImgs]);
    // close Carousel when user press esc
    useEffect(() => {
        const keydownHandler = (event) => {
            event.key === "Escape" && setShowCarousel(false);
        };
        document.addEventListener("keydown", keydownHandler);
        return () => document.removeEventListener("keydown", keydownHandler);
    });
    const openCarousel = (index) => {
        setShowCarousel(true);
        setSelectedImgIndex(index);
    };
    const handleOutsideClick = (event) => {
        if (event.target instanceof Node &&
            newRef.current &&
            !newRef.current.contains(event.target)) {
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
    return (_jsx(_Fragment, { children: showCarousel ? (_jsx("div", Object.assign({ "data-testid": "carousel" }, { children: _jsx(CarouselContainer, Object.assign({ ref: newRef }, { children: _jsx(Carousel, { imgList: images, selectedImgIndex: selectedImgIndex }) })) }))) : (_jsxs(ImageGrid, Object.assign({ height: imagesGridHeight, maxWidth: imagesGridMaxWidth, numberOfImgs: numberOfImgs, row: rowCol.row, col: rowCol.col, "data-testid": "imgGrid" }, { children: [numberOfImgs <= MAX_PREVIEW_NUM &&
                    images.slice(0, numberOfImgs).map((photo, index) => (_jsx(ImageWrap, Object.assign({ "data-testid": "imgWrap" }, { children: _jsx(ImageItem, { id: `${index}`, src: photo.url || "default.jpg", alt: (photo === null || photo === void 0 ? void 0 : photo.alt) || "photo", "data-testid": "imgItem", role: "img", onClick: () => openCarousel(index) }) }), index))), numberOfImgs > MAX_PREVIEW_NUM &&
                    images
                        .slice(0, MAX_PREVIEW_NUM)
                        .map((photo, index) => (_jsxs(ImageWrap, Object.assign({ style: { position: "relative" }, onClick: () => openCarousel(index) }, { children: [_jsx(ImageItem, { id: `${index}`, src: photo.url || "default.jpg", alt: (photo === null || photo === void 0 ? void 0 : photo.alt) || "photo" }), index === MAX_PREVIEW_NUM - 1 && (_jsxs(_Fragment, { children: [_jsx(Overlay, {}), _jsxs(NumberOfRemainingImgs, { children: ["+ ", numberOfImgs - MAX_PREVIEW_NUM] })] }))] }), index)))] }))) }));
};
export default ImageGridComponent;
/*----------------------EMOTION STYLED---------------------- */
const CarouselContainer = styled.div `
  height: 90vh;
  width: 90vw;
  margin: 0 auto;
  cursor: pointer;
`;
const ImageItem = styled.img `
  object-fit: cover;
  object-position: center;
  min-width: 100%;
  height: 100%;
`;
let ImageWrap = styled.div `
  height: 100%;
  overflow: hidden;
  position: relative;
  textalign: center;
`;
const ImageGrid = styled.div `
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
const Overlay = styled.div `
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
const NumberOfRemainingImgs = styled.p `
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
