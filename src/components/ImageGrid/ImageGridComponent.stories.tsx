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
    imagesGridMaxWidth: "30rem",
    imagesGridHeight: "20rem",
  },
  play: async ({ canvasElement }) => {
    // const canvas = within(canvasElement);
    // const email = canvas.getByLabelText(/email/i);
    // const question = canvas.getByLabelText(/question/i);

    // const submitBtn = canvas.getByRole("button", { name: /post question/i });
    // await userEvent.type(email, "haha@gmail.com");
    // await userEvent.type(question, "Did you watch end game?");
    // await userEvent.click(submitBtn);

    // await expect(canvas.getByText(/thank you/i)).toBeInTheDocument();
    const canvas = within(canvasElement);
    const imageWrapper = canvas.getByTestId("wrapper");
    await expect(imageWrapper).toBeInTheDocument();
    
    
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
