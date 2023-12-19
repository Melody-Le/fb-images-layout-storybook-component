var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { act } from "react-dom/test-utils";
const checkAllItemInList = (itemList, targetIndex, keyAttribute) => [
    itemList.forEach((item, index) => __awaiter(void 0, void 0, void 0, function* () {
        index === targetIndex
            ? yield expect(item).toHaveAttribute(keyAttribute, "true")
            : yield expect(item).toHaveAttribute(keyAttribute, "false");
    })),
];
export const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
export const testNumberOfImages = (canvasElement, expectedNumberOfImgs) => __awaiter(void 0, void 0, void 0, function* () {
    const canvas = within(canvasElement);
    const { getByTestId, getAllByRole } = canvas;
    const imageGrid = getByTestId("imgGrid");
    const imgItems = yield getAllByRole("img");
    yield expect(imgItems).toHaveLength(expectedNumberOfImgs);
    yield expect(imageGrid).toBeInTheDocument();
    yield expect(imageGrid).toHaveStyle(`display: grid`);
});
export const testCarouselFirstMount = (canvasElement, firstClickIndex, expectedTotalNumberOfImgs) => __awaiter(void 0, void 0, void 0, function* () {
    const canvas = within(canvasElement);
    const { queryByTestId, queryAllByRole } = canvas;
    const imgSliderList = queryAllByRole("img", { name: "img-slider" });
    const indicatorBtnList = queryAllByRole("button", {
        name: "indicator-btn",
    });
    const indicatorImgList = queryAllByRole("img", {
        name: "indicator-img",
    });
    yield expect(queryByTestId("carousel")).toBeVisible();
    yield expect(queryByTestId(`img-slider-${firstClickIndex}`)).toBeVisible();
    yield expect(imgSliderList).toHaveLength(expectedTotalNumberOfImgs);
    yield checkAllItemInList(imgSliderList, firstClickIndex, "data-visible");
    yield expect(indicatorBtnList).toHaveLength(expectedTotalNumberOfImgs);
    yield checkAllItemInList(indicatorBtnList, firstClickIndex, "data-active");
    yield expect(indicatorImgList).toHaveLength(expectedTotalNumberOfImgs);
    yield checkAllItemInList(indicatorImgList, firstClickIndex, "data-active");
});
export const testCarouselSecondClick = (canvasElement, secondClickIndex) => __awaiter(void 0, void 0, void 0, function* () {
    const canvas = within(canvasElement);
    const { queryAllByRole } = canvas;
    yield userEvent.click(queryAllByRole("img", {
        name: "indicator-img",
    })[secondClickIndex]);
    yield sleep(2000);
    yield checkAllItemInList(queryAllByRole("img", { name: "img-slider" }), secondClickIndex, "data-visible");
});
export const userPresESC = (canvasElement) => __awaiter(void 0, void 0, void 0, function* () {
    const canvas = within(canvasElement);
    const event = new KeyboardEvent("keydown", { key: "Escape" });
    act(() => {
        document.dispatchEvent(event);
    });
    const imageGrid = canvas.getByTestId("imgGrid");
    expect(imageGrid).toBeInTheDocument();
});
