import type { Meta, StoryObj } from "@storybook/react";
import UseUnsplashApi from "../../hooks/useUnsplashApi";

import ImageGrid from "./ImageGridComponent";

const meta: Meta<typeof ImageGrid> = {
  component: ImageGrid,
  render: (args, { loaded: { images } }) => <ImageGrid {...args} {...images} />,
  title: "ImageGrid",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  loaders: [
    async () => ({
      images: await UseUnsplashApi(5),
    }),
  ],
  args: {
    numberOfImgs: 5,
    showModal: false,
    imagesGridMaxWidth: "30rem",
    imagesGridHeight: "20rem",
  },
};
