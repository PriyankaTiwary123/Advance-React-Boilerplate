import { render, fireEvent } from "@testing-library/react";
import { useHandleFuzzySearch } from "../../../hooks/usehandleFuzzySearch";
import Search from "../Search";
import "@testing-library/jest-dom";


const useSelectorMock = jest.fn()

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("Search component", () => {
  beforeEach(() => {
    // Clear any previous mocked function calls
    useSelectorMock.mockClear();
  });

  test("renders Search component with correct placeholder", () => {
    // Mock the Redux useSelector hook return value
    useSelectorMock.mockReturnValueOnce({
      inputValue: "",
      filteredPets: [],
      isShowFilteredList: false,
    });

    const { getByPlaceholderText } = render(<Search />);

    // Assert that the search input has the correct placeholder
    expect(getByPlaceholderText("Search for Pets")).toBeInTheDocument();
  });

  test("calls handleInputChange on input change", () => {
    // Mock the Redux useSelector hook return value
    useSelectorMock.mockReturnValueOnce({
      inputValue: "",
      filteredPets: [],
      isShowFilteredList: false,
    });

    const { getByPlaceholderText } = render(<Search />);

    // Simulate change event on the search input
    fireEvent.change(getByPlaceholderText("Search for Pets"), {
      target: { value: "dog" },
    });

    // Assert that handleInputChange is called with the correct value
    expect(useHandleFuzzySearch().handleInputChange).toHaveBeenCalledWith("dog");
  });
});
