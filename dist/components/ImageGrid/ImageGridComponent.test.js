import { jsx as _jsx } from "react/jsx-runtime";
import { ImageGridComponent } from "./ImageGridComponent";
import { render } from "@testing-library/react";
test("should render", function () {
    var getByTestId = render(_jsx(ImageGridComponent, { imagesGridMaxWidth: "30rem", imagesGridHeight: "20rem", images: [
            {
                url: "https://i.pinimg.com/564x/45/82/70/4582709a546da80458c78fc683e8b19c.jpg",
                alt: "1",
            },
            {
                url: "https://i.pinimg.com/564x/45/82/70/4582709a546da80458c78fc683e8b19c.jpg",
                alt: "2",
            },
            {
                url: "https://i.pinimg.com/564x/45/82/70/4582709a546da80458c78fc683e8b19c.jpg",
                alt: "3",
            },
            {
                url: "https://i.pinimg.com/564x/45/82/70/4582709a546da80458c78fc683e8b19c.jpg",
                alt: "4",
            },
        ] })).getByTestId;
    var wrapperCom = getByTestId("wrapper");
    expect(wrapperCom).toHaveStyle("row");
    // expect(screen.getByRole())
});
