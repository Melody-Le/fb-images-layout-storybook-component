import type { Meta, StoryObj } from "@storybook/react";

import ImageGrid from "./ImageGridComponent";

const meta: Meta<typeof ImageGrid> = {
  component: ImageGrid,
  title: "ImageGrid",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    numberOfImgs: 5,
    showModal: false,
    imagesGridWidth: "30rem",
    imagesGridHeight: "20rem",
  },
};
