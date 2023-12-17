var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { BREAKPONITS } from "../../utils/constants";
import Carousel from "../Carousel/Carousel";
var MAX_PREVIEW_NUM = 5;
/*----------------------MAIN COMPONENT---------------------- */
export var ImageGridComponent = function (_a) {
    var imagesGridMaxWidth = _a.imagesGridMaxWidth, imagesGridHeight = _a.imagesGridHeight, images = _a.images;
    // Set State:
    var _b = useState({ col: 6, row: 2 }), rowCol = _b[0], setRowCol = _b[1];
    var _c = useState(false), showCarousel = _c[0], setShowCarousel = _c[1];
    var _d = useState(-1), selectedImgIndex = _d[0], setSelectedImgIndex = _d[1];
    var newRef = useRef(null);
    console.log(images);
    var numberOfImgs = images === null || images === void 0 ? void 0 : images.length;
    // useEffect to setup all initial render
    useEffect(function () {
        if (numberOfImgs > MAX_PREVIEW_NUM - 1) {
            setRowCol({ col: 6, row: 2 });
            ImageWrap = styled.div(function () { return ({
                minWidth: "100%",
                height: "100%",
                overflow: "hidden",
                gridColumn: "auto/ span 2",
                "&:nth-of-type(1), &:nth-of-type(2)": {
                    gridColumn: "auto / span 3",
                },
            }); });
        }
        else if (numberOfImgs > 1) {
            setRowCol({ col: 2, row: 6 });
            ImageWrap = styled.div(function () { return ({
                minWidth: "100%",
                height: "100%",
                overflow: "hidden",
                gridRow: "auto/ span ".concat(6 / (numberOfImgs - 1)),
                "&:nth-of-type(1)": {
                    gridRow: "auto/ span 6",
                },
            }); });
        }
        else {
            setRowCol({ col: 1, row: 1 });
        }
    }, [numberOfImgs]);
    // close Carousel when user press esc
    useEffect(function () {
        var keydownHandler = function (event) {
            event.key === "Escape" && setShowCarousel(false);
        };
        document.addEventListener("keydown", keydownHandler);
        return function () { return document.removeEventListener("keydown", keydownHandler); };
    });
    var openCarousel = function (index) {
        setShowCarousel(true);
        setSelectedImgIndex(index);
    };
    var handleOutsideClick = function (event) {
        if (event.target instanceof Node &&
            newRef.current &&
            !newRef.current.contains(event.target)) {
            setShowCarousel(false);
        }
    };
    useEffect(function () {
        document.addEventListener("mousedown", handleOutsideClick);
        return function () {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    });
    console.log("haha");
    return (_jsx(_Fragment, { children: showCarousel ? (_jsx("div", __assign({ "data-testid": "carousel" }, { children: _jsx(CarouselContainer, __assign({ ref: newRef }, { children: _jsx(Carousel, { imgList: images, selectedImgIndex: selectedImgIndex }) })) }))) : (_jsxs(ImageGrid, __assign({ height: imagesGridHeight, maxWidth: imagesGridMaxWidth, numberOfImgs: numberOfImgs, row: rowCol.row, col: rowCol.col, "data-testid": "imgGrid" }, { children: [numberOfImgs <= MAX_PREVIEW_NUM &&
                    images.slice(0, numberOfImgs).map(function (photo, index) { return (_jsx(ImageWrap, __assign({ "data-testid": "imgWrap" }, { children: _jsx(ImageItem, { id: "".concat(index), src: photo.url || "default.jpg", alt: (photo === null || photo === void 0 ? void 0 : photo.alt) || "photo", "data-testid": "imgItem", role: "img", onClick: function () { return openCarousel(index); } }) }), index)); }), numberOfImgs > MAX_PREVIEW_NUM &&
                    images
                        .slice(0, MAX_PREVIEW_NUM)
                        .map(function (photo, index) { return (_jsxs(ImageWrap, __assign({ style: { position: "relative" }, onClick: function () { return openCarousel(index); } }, { children: [_jsx(ImageItem, { id: "".concat(index), src: photo.url || "default.jpg", alt: (photo === null || photo === void 0 ? void 0 : photo.alt) || "photo" }), index === MAX_PREVIEW_NUM - 1 && (_jsxs(_Fragment, { children: [_jsx(Overlay, {}), _jsxs(NumberOfRemainingImgs, { children: ["+ ", numberOfImgs - MAX_PREVIEW_NUM] })] }))] }), index)); })] }))) }));
};
export default ImageGridComponent;
/*----------------------EMOTION STYLED---------------------- */
var CarouselContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 90vh;\n  width: 90vw;\n  margin: 0 auto;\n  cursor: pointer;\n"], ["\n  height: 90vh;\n  width: 90vw;\n  margin: 0 auto;\n  cursor: pointer;\n"])));
var ImageItem = styled.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  object-fit: cover;\n  object-position: center;\n  min-width: 100%;\n  height: 100%;\n"], ["\n  object-fit: cover;\n  object-position: center;\n  min-width: 100%;\n  height: 100%;\n"])));
var ImageWrap = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  textalign: center;\n"], ["\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  textalign: center;\n"])));
var ImageGrid = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  grid-template-rows: repeat(", ", 1fr);\n  height: ", ";\n  max-width: ", ";\n  gap: 0.3rem;\n  margin: 0 auto;\n  cursor: pointer;\n  caret-color: transparent;\n\n  ", " {\n    gap: 0.4rem;\n  }\n  ", " {\n    gap: 0.5rem;\n  }\n  ", " {\n    gap: 0.6 rem;\n  }\n  ", " {\n    gap: 0.8 rem;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  grid-template-rows: repeat(", ", 1fr);\n  height: ", ";\n  max-width: ", ";\n  gap: 0.3rem;\n  margin: 0 auto;\n  cursor: pointer;\n  caret-color: transparent;\n\n  ", " {\n    gap: 0.4rem;\n  }\n  ", " {\n    gap: 0.5rem;\n  }\n  ", " {\n    gap: 0.6 rem;\n  }\n  ", " {\n    gap: 0.8 rem;\n  }\n"])), function (props) { return props.col; }, function (props) { return props.row; }, function (props) { return (props.height ? props.height : "20rem"); }, function (props) { return (props.maxWidth ? props.maxWidth : ""); }, BREAKPONITS.small, BREAKPONITS.tablet, BREAKPONITS.large, BREAKPONITS.wide);
var Overlay = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n"], ["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n"])));
var NumberOfRemainingImgs = styled.p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 1.5rem;\n  text-shadow: 1px 1px 3px grey;\n  z-index: 100;\n  font-weight: 700;\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 1.5rem;\n  text-shadow: 1px 1px 3px grey;\n  z-index: 100;\n  font-weight: 700;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
