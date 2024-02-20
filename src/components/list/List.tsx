import { useMemo } from "react";
import { useSuggestionClick } from "../../hooks/useSuggestionClick";
import { Pet } from "../types/pet";
import * as style from "./List.styles";

interface ListProps {
  inputValue: string;
  filteredPets: Pet[];
  noResultsFound: boolean;
  focusedIndex: number | null;
  isShowFilteredList: boolean;
  listRef: React.RefObject<HTMLUListElement>;
}

const List: React.FC<ListProps> = ({
  inputValue,
  filteredPets,
  noResultsFound,
  focusedIndex,
  isShowFilteredList,
  listRef, // Receive listRef prop
}) => {
  // Hooks
  const { handleSuggestionClick } = useSuggestionClick();

  // Memoized function to highlight matching text
  const highlightMatch = useMemo(() => {
    const memoizedMatchingText = (text: string) => {
      const index = text?.toLowerCase().indexOf(inputValue?.toLowerCase());
      if (index !== -1) {
        return (
          <>
            <style.HighlightedText data-testid="highlighted-text">
              {text?.substring(0, index)}
            </style.HighlightedText>
            {text?.substring(index, index + inputValue.length)}
            <style.HighlightedText data-testid="highlighted-text">
              {text?.substring(index + inputValue.length)}
            </style.HighlightedText>
          </>
        );
      }
      return text;
    };

    return memoizedMatchingText;
  }, [filteredPets, inputValue]);

  // Determine the role based on the isShowFilteredList prop
  const role = isShowFilteredList ? "listitem" : "option";
  console.log(noResultsFound, "noResultsFound");
  return (
    <>
      <p>{noResultsFound && "No Result Found"}</p>
      {/* Filtered list */}
      <style.FilteredList
        isShowFilteredList={isShowFilteredList}
        ref={listRef} // Attach the ref to the list container
      >
        {filteredPets.map((pet: Pet, index: number) => (
          <style.ListItem
            key={pet.id}
            focusedIndex={focusedIndex === index}
            onClick={() => handleSuggestionClick(pet)}
            tabIndex={0} // Add tabindex for keyboard accessibility
            role={role} // Make the role dynamic
            aria-selected={focusedIndex === index} // Indicate the selected item for screen readers
          >
            {/* Highlighted text */}
            <p>{highlightMatch(pet.name)}</p>
            <p>{highlightMatch(pet.species)}</p>
          </style.ListItem>
        ))}
      </style.FilteredList>
    </>
  );
};

export default List;
