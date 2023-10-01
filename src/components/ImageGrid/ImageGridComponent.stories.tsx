import type { Meta, StoryObj } from "@storybook/react";

import ImageGrid from "./ImageGridComponent";

const meta: Meta<typeof ImageGrid> = {
  component: ImageGrid,
  title: "ImageGrid",
  tags: ["autodocs"],
  argTypes: {
    numberOfImgs: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    numberOfImgs: 5,
    showModal: false,
    imagesGridMaxWidth: "30rem",
    imagesGridHeight: "20rem",
  },
};
