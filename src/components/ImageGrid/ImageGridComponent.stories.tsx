import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import UseUnsplashApi from "../../hooks/useUnsplashApi";

import ImageGrid from "./ImageGridComponent";

const meta: Meta<typeof ImageGrid> = {
  component: ImageGrid,
  render: (args, { loaded: { images } }) => (
    <ImageGrid {...args} images={images} />
  ),
  title: "ImageGrid",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const waitForEvent = (delay: number = 3000) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const Base: Story = {
  loaders: [
    async () => ({
      images: await UseUnsplashApi(),
    }),
  ],
  args: {
    imagesGridMaxWidth: "30rem",
    imagesGridHeight: "20rem",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const imageGrid = canvas.getByTestId("imgGrid");
    const imgItems = await canvas.getAllByRole("img");
    await expect(imgItems).toHaveLength(5);
    await expect(imageGrid).toBeInTheDocument();
    await expect(imageGrid).toHaveStyle(`display: grid`);

    await userEvent.click(imgItems[3] as HTMLSelectElement);

    await sleep(5000);

    const carousel = canvas.queryByTestId("carousel");

    const selectedImgSlider = canvas.queryByTestId("img-slider-3");
    const imgSliderList = canvas.queryAllByRole("img", { name: "img-slider" });
    const indicatorBtnList = canvas.queryAllByRole("button", {
      name: "indicator-btn",
    });
    const indicatorImgList = canvas.queryAllByRole("img", {
      name: "indicator-img",
    });

    await expect(carousel).toBeVisible();

    await expect(selectedImgSlider).toBeVisible();

    await expect(imgSliderList).toHaveLength(10);
    imgSliderList.forEach(async (img, index) => {
      index === 3
        ? await expect(img).toHaveAttribute("data-visible", "true")
        : await expect(img).toHaveAttribute("data-visible", "false");
    });

    await expect(indicatorBtnList).toHaveLength(10);
    indicatorBtnList.forEach(async (btn, index) => {
      index === 3
        ? await expect(btn).toHaveStyle(`background-color: rgb(255, 255, 255)`)
        : await expect(btn).toHaveStyle(`background-color: rgb(128, 128, 128)`);
    });

    await expect(indicatorImgList).toHaveLength(10);
    indicatorImgList.forEach(async (img, index) => {
      index === 3
        ? await expect(img).toHaveAttribute("data-active", "true")
        : await expect(img).toHaveAttribute("data-active", "false");
    });

    await userEvent.click(
      canvas.queryAllByRole("img", {
        name: "indicator-img",
      })[2] as HTMLSelectElement
    );

    // await sleep(2000);

    canvas
      .queryAllByRole("img", { name: "img-slider" })
      .forEach(async (img, index) => {
        index === 2
          ? await expect(img).toHaveAttribute("data-visible", "true")
          : await expect(img).toHaveAttribute("data-visible", "false");
      });
  },
};
export const OneImage: Story = {
  loaders: [
    async () => ({
      images: await UseUnsplashApi(1),
    }),
  ],
  args: {
    imagesGridMaxWidth: "30rem",
    imagesGridHeight: "20rem",
  },
};

export const TwoImages: Story = {
  loaders: [
    async () => ({
      images: await UseUnsplashApi(2),
    }),
  ],
  args: {
    imagesGridMaxWidth: "30rem",
    imagesGridHeight: "20rem",
  },
};
export const ThreeImages: Story = {
  loaders: [
    async () => ({
      images: await UseUnsplashApi(3),
    }),
  ],
  args: {
    imagesGridMaxWidth: "30rem",
    imagesGridHeight: "20rem",
  },
};
export const FourImages: Story = {
  loaders: [
    async () => ({
      images: await UseUnsplashApi(4),
    }),
  ],
  args: {
    imagesGridMaxWidth: "30rem",
    imagesGridHeight: "20rem",
  },
};
export const FiveImages: Story = {
  loaders: [
    async () => ({
      images: await UseUnsplashApi(5),
    }),
  ],
  args: {
    imagesGridMaxWidth: "30rem",
    imagesGridHeight: "20rem",
  },
};
