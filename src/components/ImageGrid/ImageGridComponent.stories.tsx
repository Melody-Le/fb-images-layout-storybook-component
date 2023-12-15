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
    // await userEvent.click(imgItems[0] as HTMLSelectElement);
    // await waitForEvent();
    await waitFor(() => userEvent.click(imgItems[3] as HTMLSelectElement), {
      timeout: 20000,
    });
    const carousel = canvas.queryByTestId("carousel");
    const selectedImgSlider = canvas.queryByRole("img", {
      name: "img-slider-3",
    });
    await expect(carousel).toBeVisible();

    await expect(selectedImgSlider).toBeVisible();

    // for this assertion, I dont know why It fail . test will be pass if translate : 0% , but as oer the logic of component , it should be translate -100 * imageIndex % ( mean -300%)

    await expect(selectedImgSlider).toHaveStyle("translate: -300%");
    // should not show other images , example: not show img have area-label: img-slider-2.
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
