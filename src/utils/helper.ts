import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { act } from "react-dom/test-utils";

const checkAllItemInList = (
  itemList: HTMLElement[],
  targetIndex: number,
  keyAttribute: string
) => [
  itemList.forEach(async (item, index) => {
    index === targetIndex
      ? await expect(item).toHaveAttribute(keyAttribute, "true")
      : await expect(item).toHaveAttribute(keyAttribute, "false");
  }),
];

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const testNumberOfImages = async (
  canvasElement: HTMLElement,
  expectedNumberOfImgs: number
) => {
  const canvas = within(canvasElement);
  const { getByTestId, getAllByRole } = canvas;
  const imageGrid = getByTestId("imgGrid");
  const imgItems = await getAllByRole("img");
  await expect(imgItems).toHaveLength(expectedNumberOfImgs);
  await expect(imageGrid).toBeInTheDocument();
  await expect(imageGrid).toHaveStyle(`display: grid`);
};

export const testCarouselFirstMount = async (
  canvasElement: HTMLElement,
  firstClickIndex: number,
  expectedTotalNumberOfImgs: number
) => {
  const canvas = within(canvasElement);
  const { queryByTestId, queryAllByRole } = canvas;

  const imgSliderList = queryAllByRole("img", { name: "img-slider" });

  const indicatorBtnList = queryAllByRole("button", {
    name: "indicator-btn",
  });
  const indicatorImgList = queryAllByRole("img", {
    name: "indicator-img",
  });

  await expect(queryByTestId("carousel")).toBeVisible();

  await expect(queryByTestId(`img-slider-${firstClickIndex}`)).toBeVisible();

  await expect(imgSliderList).toHaveLength(expectedTotalNumberOfImgs);

  await checkAllItemInList(imgSliderList, firstClickIndex, "data-visible");

  await expect(indicatorBtnList).toHaveLength(expectedTotalNumberOfImgs);

  await checkAllItemInList(indicatorBtnList, firstClickIndex, "data-active");

  await expect(indicatorImgList).toHaveLength(expectedTotalNumberOfImgs);

  await checkAllItemInList(indicatorImgList, firstClickIndex, "data-active");
};

export const testCarouselSecondClick = async (
  canvasElement: HTMLElement,
  secondClickIndex: number
) => {
  const canvas = within(canvasElement);
  const { queryAllByRole } = canvas;

  await userEvent.click(
    queryAllByRole("img", {
      name: "indicator-img",
    })[secondClickIndex] as HTMLSelectElement
  );

  await sleep(2000);

  await checkAllItemInList(
    queryAllByRole("img", { name: "img-slider" }),
    secondClickIndex,
    "data-visible"
  );
};

export const userPresESC = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);

  const event = new KeyboardEvent("keydown", { key: "Escape" });
  act(() => {
    document.dispatchEvent(event);
  });
  const imageGrid = canvas.getByTestId("imgGrid");
  expect(imageGrid).toBeInTheDocument();
};
