import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";

import { composeStory } from "@storybook/react";

import Meta, { Base as ImageGrid } from "./ImageGridComponent.stories"; //👈 Our stories imported here.

const ImageGridTesting = composeStory(ImageGrid, Meta);

test("Checks if the form is valid", async () => {
  render(<ImageGridTesting />);
  const imageGrid = screen.getByTestId("imgGrid");
  expect(imageGrid).toBeInTheDocument();

  // const buttonElement = screen.getByRole("button", {
  //   name: "Submit",
  // });

  // fireEvent.click(buttonElement);

  // const isFormValid = screen.getByLabelText("invalid-form");
  // expect(isFormValid).toBeInTheDocument();
});
