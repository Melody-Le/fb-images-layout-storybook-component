var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { userEvent, within } from "@storybook/testing-library";
import { sleep, testNumberOfImages, testCarouselFirstMount, testCarouselSecondClick, userPresESC, } from "../../utils/helper";
import UseUnsplashApi from "../../hooks/useUnsplashApi";
import ImageGrid from "./ImageGridComponent";
const meta = {
    component: ImageGrid,
    render: (args, { loaded: { images } }) => (_jsx(ImageGrid, Object.assign({}, args, { images: images }))),
    title: "ImageGrid",
    tags: ["autodocs"],
};
export default meta;
export const Base = {
    loaders: [
        () => __awaiter(void 0, void 0, void 0, function* () {
            return ({
                images: yield UseUnsplashApi(),
            });
        }),
    ],
    args: {
        imagesGridMaxWidth: "30rem",
        imagesGridHeight: "20rem",
    },
    play: ({ canvasElement }) => __awaiter(void 0, void 0, void 0, function* () {
        const canvas = within(canvasElement);
        yield testNumberOfImages(canvasElement, 5);
        yield userEvent.click(canvas.getAllByRole("img")[3]);
        yield sleep(2000);
        yield testCarouselFirstMount(canvasElement, 3, 10);
        yield testCarouselSecondClick(canvasElement, 2);
        yield userPresESC(canvasElement);
    }),
};
export const OneImage = {
    loaders: [
        () => __awaiter(void 0, void 0, void 0, function* () {
            return ({
                images: yield UseUnsplashApi(1),
            });
        }),
    ],
    args: {
        imagesGridMaxWidth: "30rem",
        imagesGridHeight: "20rem",
    },
    play: ({ canvasElement }) => __awaiter(void 0, void 0, void 0, function* () {
        const canvas = within(canvasElement);
        yield testNumberOfImages(canvasElement, 1);
        yield userEvent.click(canvas.getAllByRole("img")[0]);
        yield sleep(2000);
        yield testCarouselFirstMount(canvasElement, 0, 1);
        yield userPresESC(canvasElement);
    }),
};
export const TwoImages = {
    loaders: [
        () => __awaiter(void 0, void 0, void 0, function* () {
            return ({
                images: yield UseUnsplashApi(2),
            });
        }),
    ],
    args: {
        imagesGridMaxWidth: "30rem",
        imagesGridHeight: "20rem",
    },
    play: ({ canvasElement }) => __awaiter(void 0, void 0, void 0, function* () {
        const canvas = within(canvasElement);
        yield testNumberOfImages(canvasElement, 2);
        yield userEvent.click(canvas.getAllByRole("img")[1]);
        yield sleep(2000);
        yield testCarouselFirstMount(canvasElement, 1, 2);
        yield testCarouselSecondClick(canvasElement, 0);
        yield userPresESC(canvasElement);
    }),
};
export const ThreeImages = {
    loaders: [
        () => __awaiter(void 0, void 0, void 0, function* () {
            return ({
                images: yield UseUnsplashApi(3),
            });
        }),
    ],
    args: {
        imagesGridMaxWidth: "30rem",
        imagesGridHeight: "20rem",
    },
    play: ({ canvasElement }) => __awaiter(void 0, void 0, void 0, function* () {
        const canvas = within(canvasElement);
        yield testNumberOfImages(canvasElement, 3);
        yield userEvent.click(canvas.getAllByRole("img")[2]);
        yield sleep(2000);
        yield testCarouselFirstMount(canvasElement, 2, 3);
        yield testCarouselSecondClick(canvasElement, 1);
        yield userPresESC(canvasElement);
    }),
};
export const FourImages = {
    loaders: [
        () => __awaiter(void 0, void 0, void 0, function* () {
            return ({
                images: yield UseUnsplashApi(4),
            });
        }),
    ],
    args: {
        imagesGridMaxWidth: "30rem",
        imagesGridHeight: "20rem",
    },
    play: ({ canvasElement }) => __awaiter(void 0, void 0, void 0, function* () {
        const canvas = within(canvasElement);
        yield testNumberOfImages(canvasElement, 4);
        yield userEvent.click(canvas.getAllByRole("img")[2]);
        yield sleep(2000);
        yield testCarouselFirstMount(canvasElement, 2, 4);
        yield testCarouselSecondClick(canvasElement, 1);
        yield userPresESC(canvasElement);
    }),
};
export const FiveImages = {
    loaders: [
        () => __awaiter(void 0, void 0, void 0, function* () {
            return ({
                images: yield UseUnsplashApi(5),
            });
        }),
    ],
    args: {
        imagesGridMaxWidth: "30rem",
        imagesGridHeight: "20rem",
    },
    play: ({ canvasElement }) => __awaiter(void 0, void 0, void 0, function* () {
        const canvas = within(canvasElement);
        yield testNumberOfImages(canvasElement, 5);
        yield userEvent.click(canvas.getAllByRole("img")[2]);
        yield sleep(2000);
        yield testCarouselFirstMount(canvasElement, 2, 5);
        yield testCarouselSecondClick(canvasElement, 1);
        yield userPresESC(canvasElement);
    }),
};
