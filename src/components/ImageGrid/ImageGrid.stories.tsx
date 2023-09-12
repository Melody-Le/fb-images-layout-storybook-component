import type { Meta, StoryObj } from "@storybook/react";

import ImageGrid from "./ImageGrid";

const meta: Meta<typeof ImageGrid> = {
  component: ImageGrid,
  title: "ImageGrid",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    numberOfImgs: 2,
    showModal: false,
    imagesGridWidth: 800,
    imagesGridHeight: 500,
  },
};
