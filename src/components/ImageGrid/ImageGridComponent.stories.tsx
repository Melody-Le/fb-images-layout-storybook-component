import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
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

export const Base: Story = {
  loaders: [
    async () => ({
      images: await UseUnsplashApi(),
    }),
  ],
  args: {
    // numberOfImgs: 9,
    showModal: false,
    imagesGridMaxWidth: "30rem",
    imagesGridHeight: "20rem",
  },
  // play: async ({canvasElement}) => {
  //   const canvas = ithi
  // }
};
export const OneImage: Story = {
  loaders: [
    async () => ({
      images: await UseUnsplashApi(1),
    }),
  ],
  args: {
    showModal: false,
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
    showModal: false,
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
    showModal: false,
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
    showModal: false,
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
    showModal: false,
    imagesGridMaxWidth: "30rem",
    imagesGridHeight: "20rem",
  },
};
