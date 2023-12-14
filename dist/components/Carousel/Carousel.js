var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
function Carousel(_a) {
    var imgList = _a.imgList, selectedImgIndex = _a.selectedImgIndex;
    var _b = useState(0), imgIndex = _b[0], setImgIndex = _b[1];
    var showNext = function () {
        setImgIndex(function (prevState) {
            return prevState === imgList.length - 1 ? 0 : prevState + 1;
        });
    };
    var showPrevious = function () {
        setImgIndex(function (prevState) {
            return prevState === 0 ? imgList.length - 1 : prevState - 1;
        });
    };
    useEffect(function () {
        setImgIndex(selectedImgIndex);
    }, [selectedImgIndex]);
    return (_jsxs(CarouselWrapper, { children: [_jsx(ImageSliderContainer, { children: imgList.map(function (item, idx) { return (_jsx(ImageSlider, { src: item.url, alt: item.alt, style: {
                        translate: "".concat(-100 * imgIndex, "%"),
                    } }, idx)); }) }), _jsx(SliderLeftBtn, { onClick: showPrevious }), _jsx(SliderRightBtn, { onClick: showNext }), _jsx(IndicatorContainer, { children: imgList.map(function (_, index) {
                    return index === imgIndex ? (_jsx(IndicatorButton, { onClick: function () {
                            setImgIndex(index);
                        } }, index)) : (_jsx(IndicatorButtonInactive, { onClick: function () {
                            setImgIndex(index);
                        } }, index));
                }) }), _jsx(IndicatorContainer, { children: imgList.map(function (item, index) {
                    return index === imgIndex ? (_jsx(IndicatorImg, { src: item.url, onClick: function () {
                            setImgIndex(index);
                        } }, index)) : (_jsx(IndicatorImgInactive, { src: item.url, onClick: function () {
                            setImgIndex(index);
                        } }, index));
                }) })] }));
}
export default Carousel;
/*----------------------EMOTION STYLED---------------------- */
var CarouselWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.5rem;\n  justify-content: center;\n  align-items: center;\n"], ["\n  height: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.5rem;\n  justify-content: center;\n  align-items: center;\n"])));
var ImageSliderContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  overflow: hidden;\n  display: flex;\n  border-radius: 0.5rem;\n  box-shadow: 0px 0px 7px #666;\n"], ["\n  overflow: hidden;\n  display: flex;\n  border-radius: 0.5rem;\n  box-shadow: 0px 0px 7px #666;\n"])));
var ImageSlider = styled.img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  object-fit: contain;\n  width: 100%;\n  height: 100%;\n  display: block;\n  flex-shrink: 0;\n  flex-grow: 0;\n  transition: translate 300ms ease-in-out;\n"], ["\n  object-fit: contain;\n  width: 100%;\n  height: 100%;\n  display: block;\n  flex-shrink: 0;\n  flex-grow: 0;\n  transition: translate 300ms ease-in-out;\n"])));
var SliderLeftBtn = styled(BsArrowLeftCircleFill)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  width: 2rem;\n  height: 2rem;\n  color: white;\n  filter: drop-shadow(0px 0px 5px #555);\n  left: 1rem;\n"], ["\n  position: absolute;\n  width: 2rem;\n  height: 2rem;\n  color: white;\n  filter: drop-shadow(0px 0px 5px #555);\n  left: 1rem;\n"])));
var SliderRightBtn = styled(BsArrowRightCircleFill)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  width: 2rem;\n  height: 2rem;\n  color: white;\n  filter: drop-shadow(0px 0px 5px #555);\n  right: 1rem;\n"], ["\n  position: absolute;\n  width: 2rem;\n  height: 2rem;\n  color: white;\n  filter: drop-shadow(0px 0px 5px #555);\n  right: 1rem;\n"])));
var IndicatorContainer = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  gap: 0.25rem;\n"], ["\n  display: flex;\n  gap: 0.25rem;\n"])));
var IndicatorButton = styled.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  all: unset;\n  background-color: white;\n  height: 0.6rem;\n  width: 0.6rem;\n  border-radius: 100%;\n  box-shadow: 0px 0px 5px #555;\n  margin: 0 0.2rem;\n  cursor: pointer;\n  transition: scale 100ms ease-in-out;\n  &:hover {\n    scale: 1.5;\n  }\n"], ["\n  all: unset;\n  background-color: white;\n  height: 0.6rem;\n  width: 0.6rem;\n  border-radius: 100%;\n  box-shadow: 0px 0px 5px #555;\n  margin: 0 0.2rem;\n  cursor: pointer;\n  transition: scale 100ms ease-in-out;\n  &:hover {\n    scale: 1.5;\n  }\n"])));
var IndicatorButtonInactive = styled(IndicatorButton)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  background-color: grey;\n"], ["\n  background-color: grey;\n"])));
var IndicatorImg = styled.img(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  outline: none;\n  margin: 0 0.2rem;\n  cursor: pointer;\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  box-shadow: 0px 0px 5px #555;\n  border: 2px yellow solid;\n  border-radius: 0.5rem;\n  transition: scale 100ms ease-in-out;\n  &:hover {\n    scale: 1.05;\n    filter: saturate(0) brightness(0.7) contrast(3);\n    mix-blend-mode: multiply;\n    filter: grayscale(0);\n  }\n"], ["\n  outline: none;\n  margin: 0 0.2rem;\n  cursor: pointer;\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  box-shadow: 0px 0px 5px #555;\n  border: 2px yellow solid;\n  border-radius: 0.5rem;\n  transition: scale 100ms ease-in-out;\n  &:hover {\n    scale: 1.05;\n    filter: saturate(0) brightness(0.7) contrast(3);\n    mix-blend-mode: multiply;\n    filter: grayscale(0);\n  }\n"])));
var IndicatorImgInactive = styled(IndicatorImg)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%);\n  border: none;\n"], ["\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%);\n  border: none;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
