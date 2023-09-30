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
    images: [
      "https://i.pinimg.com/564x/0f/71/0b/0f710bb81c2ff1aff8976239c18acfd2.jpg",
      "https://i.pinimg.com/564x/57/37/e8/5737e8017b1c6946a6eb25b6db03a72e.jpg",
      "https://i.pinimg.com/736x/55/ea/08/55ea0881688047362cb6d23f47166b65.jpg",
      "https://i.pinimg.com/564x/48/40/05/4840054e287358f6b95e6dacfe395f2b.jpg",
      "https://i.pinimg.com/564x/9c/82/a0/9c82a08a4a0e3b581122ab2576f1c07d.jpg",
    ],
    showModal: false,
    imagesGridWidth: "",
    imagesGridHeight: "20rem",
  },
};
