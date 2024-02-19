import { render, screen } from "@testing-library/react";
import * as React from "react";
import List from "../List";
import { Provider } from "react-redux";
import { store } from "../../../appStore";

describe("List component", () => {
  test("renders list items with highlighted text", () => {
    const inputValue = "dog";
    const filteredPets = [
      {
        id: 2,
        name: "Dann",
        species: "Dog",
        available: true,
        birthYear: 2016,
        dateAdded: "01-01-2022",
        photoUrl: "https://i.imgur.com/ES0AHRxl.jpg",
      },
      {
        id: 3,
        name: "Annemie",
        species: "Dog",
        available: true,
        birthYear: 2008,
        dateAdded: "25-04-2021",
        photoUrl: "https://i.imgur.com/cL9Su9ql.jpg",
      },
      {
        id: 9,
        name: "Tank",
        species: "Dog",
        available: false,
        birthYear: 2015,
        dateAdded: "05-08-2021",
        photoUrl: "https://i.imgur.com/Q4CSFnXl.jpg",
      },
      {
        id: 13,
        name: "Ace",
        species: "Dog",
        available: false,
        birthYear: 2018,
        dateAdded: "21-01-2021",
        photoUrl: "https://i.imgur.com/N1ZEtEwl.jpg",
      },
    ];
    const focusedIndex = null;
    const isShowFilteredList = true;

    render(
      <Provider store={store}>
        <List
          inputValue={inputValue}
          filteredPets={filteredPets}
          focusedIndex={focusedIndex}
          isShowFilteredList={isShowFilteredList}
          listRef={React.createRef()} // Create a ref for testing
        />
      </Provider>
    );

    // Check if list items are rendered with highlighted text
    const highlightedTextElements = screen.getAllByTestId("highlighted-text");
    expect(highlightedTextElements).toHaveLength(filteredPets.length * 2); // 2 text elements per item
  });
});
