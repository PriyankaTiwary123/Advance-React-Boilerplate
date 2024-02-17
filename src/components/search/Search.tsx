import { useMemo } from "react";
import { useFuzzySearch } from "../../hooks/useFuzzySearch";
import { SearchIcon } from "../../public/Icons/SearchIcon";
import theme from "../../styles/theme";
import { Pet } from "../types/pet";
import * as style from "./Search.Styles";

const Search: React.FC = () => {
  const { inputValue, filteredPets, handleInputChange, handleKeyDown, focusedIndex } =
    useFuzzySearch();

  const highlightMatch = useMemo(() => {
    const memoizedMatchingText = (text: string) => {
      const index = text?.toLowerCase().indexOf(inputValue?.toLowerCase());
      if (index !== -1) {
        return (
          <>
            <style.HighlightedText>
              {text?.substring(0, index)}
            </style.HighlightedText>
            {text?.substring(index, index + inputValue.length)}
            <style.HighlightedText>
              {text?.substring(index + inputValue.length)}
            </style.HighlightedText>
          </>
        );
      }
      return text;
    };

    return memoizedMatchingText;
  }, [filteredPets]);

  return (
    <style.AutocompleteContainer>
      <SearchIcon color={theme.colors.secondary} />

      <style.SearchInput
        type="text"
        placeholder={"Search for pets by name or species"}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        aria-label="Search"
        autoComplete="off"
      />
      {inputValue && (
        <style.FilteredList>
          {filteredPets.map((pet: Pet, index: number) => (
            <style.ListItem key={pet.id} focusedIndex = {focusedIndex===index}>
              <p>{highlightMatch(pet.name)}</p>
              <p>{highlightMatch(pet.species)}</p>
            </style.ListItem>
          ))}
        </style.FilteredList>
      )}
    </style.AutocompleteContainer>
  );
};

export default Search;
