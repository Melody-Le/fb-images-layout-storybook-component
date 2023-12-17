import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import {
  sleep,
  testNumberOfImages,
  testCarouselFirstMount,
  testCarouselSecondClick,
} from "../../utils/helper";

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
    await testNumberOfImages(canvasElement, 5);

    await userEvent.click(canvas.getAllByRole("img")[3] as HTMLSelectElement);

    await sleep(2000);

    await testCarouselFirstMount(canvasElement, 3, 10);
    await testCarouselSecondClick(canvasElement, 2);
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
