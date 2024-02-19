import { render } from "@testing-library/react";
import Header from "../Header";

describe("Header component", () => {
  test("renders header with icon and title", () => {
    const iconSrc = "/icons/pet-icon-small.svg";
    const titleText = "Welcome to Pet Store";

    const { getByAltText, getByText } = render(
      <Header icon={iconSrc} title={titleText} />
    );

    // Check if the image with the provided alt text is rendered
    const iconElement = getByAltText("Pet Icon");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("src", iconSrc);

    // Check if the title text is rendered
    const titleElement = getByText(titleText);
    expect(titleElement).toBeInTheDocument();
  });
});
