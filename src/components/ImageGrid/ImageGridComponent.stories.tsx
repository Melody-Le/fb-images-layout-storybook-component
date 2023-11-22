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
    showModal: true,
    imagesGridMaxWidth: "30rem",
    imagesGridHeight: "20rem",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const image = canvas.getByRole("image");
  },
};
export const OneImage: Story = {
  loaders: [
    async () => ({
      images: await UseUnsplashApi(1),
    }),
  ],
  args: {
    showModal: true,
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
    showModal: true,
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
    showModal: true,
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
    showModal: true,
    imagesGridMaxWidth: "30rem",
    imagesGridHeight: "20rem",
  },
};
export const FiveImages: Story = {
  loaders: [
    async () => ({
      images: [
        {
          url: "https://i.pinimg.com/736x/0f/71/0b/0f710bb81c2ff1aff8976239c18acfd2.jpg",
          alt: "1",
        },
        {
          url: "https://i.pinimg.com/564x/4d/e7/6a/4de76a9aef8d030d79ed0138972cc663.jpg",
          alt: "2",
        },
        {
          url: "https://images.pexels.com/photos/1117276/pexels-photo-1117276.jpeg",
          alt: "3",
        },
        {
          url: "https://images.pexels.com/photos/1343337/pexels-photo-1343337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "4",
        },
        {
          url: "https://images.pexels.com/photos/1034466/pexels-photo-1034466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "2",
        },
      ],
    }),
  ],
  args: {
    showModal: true,
    imagesGridMaxWidth: "30rem",
    imagesGridHeight: "20rem",
  },
};
