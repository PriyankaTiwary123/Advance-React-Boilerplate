import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button, ButtonProps } from "../Button";

describe("Button component", () => {
  // Define props for testing
  const buttonProps: ButtonProps = {
    variant: "primary",
    size: "default",
    borderRadius: "4px",
    onClick: jest.fn(), // Mock function for onClick event
    children: "Click me", // Button text
  };

  it("renders button with correct text", () => {
    const { getByText } = render(<Button {...buttonProps} />);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick function when button is clicked", () => {
    const { getByText } = render(<Button {...buttonProps} />);
    fireEvent.click(getByText("Click me"));
    expect(buttonProps.onClick).toHaveBeenCalledTimes(1);
  });
});
