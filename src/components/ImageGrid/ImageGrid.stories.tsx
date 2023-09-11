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
  args: {},
};
export const Yellow: Story = {
  args: {},
};
