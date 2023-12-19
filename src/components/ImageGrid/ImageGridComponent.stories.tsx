import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import {
  sleep,
  testNumberOfImages,
  testCarouselFirstMount,
  testCarouselSecondClick,
  userPresESC,
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
  parameters: {
    options: { selectedPanel: "storybook/interactions/panel" },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await testNumberOfImages(canvasElement, 5);

    await userEvent.click(canvas.getAllByRole("img")[3] as HTMLSelectElement);

    await sleep(2000);

    await testCarouselFirstMount(canvasElement, 3, 10);
    await testCarouselSecondClick(canvasElement, 2);
    await userPresESC(canvasElement);
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await testNumberOfImages(canvasElement, 1);
    await userEvent.click(canvas.getAllByRole("img")[0] as HTMLSelectElement);
    await sleep(2000);
    await testCarouselFirstMount(canvasElement, 0, 1);
    await userPresESC(canvasElement);
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await testNumberOfImages(canvasElement, 2);

    await userEvent.click(canvas.getAllByRole("img")[1] as HTMLSelectElement);

    await sleep(2000);

    await testCarouselFirstMount(canvasElement, 1, 2);
    await testCarouselSecondClick(canvasElement, 0);
    await userPresESC(canvasElement);
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await testNumberOfImages(canvasElement, 3);

    await userEvent.click(canvas.getAllByRole("img")[2] as HTMLSelectElement);

    await sleep(2000);

    await testCarouselFirstMount(canvasElement, 2, 3);
    await testCarouselSecondClick(canvasElement, 1);
    await userPresESC(canvasElement);
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await testNumberOfImages(canvasElement, 4);

    await userEvent.click(canvas.getAllByRole("img")[2] as HTMLSelectElement);

    await sleep(2000);

    await testCarouselFirstMount(canvasElement, 2, 4);
    await testCarouselSecondClick(canvasElement, 1);
    await userPresESC(canvasElement);
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await testNumberOfImages(canvasElement, 5);

    await userEvent.click(canvas.getAllByRole("img")[2] as HTMLSelectElement);

    await sleep(2000);

    await testCarouselFirstMount(canvasElement, 2, 5);
    await testCarouselSecondClick(canvasElement, 1);
    await userPresESC(canvasElement);
  },
};
