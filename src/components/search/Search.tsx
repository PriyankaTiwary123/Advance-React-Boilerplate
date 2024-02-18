import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../appStore";
import { useHandleFuzzySearch } from "../../hooks/usehandleFuzzySearch";
import { useKeyEvent } from "../../hooks/useKeyEvent";
import { useSuggestionClick } from "../../hooks/useSuggestionClick";
import { SearchIcon } from "../../public/Icons/SearchIcon";
import theme from "../../styles/theme";
import { Pet } from "../types/pet";
import * as style from "./Search.Styles";

const Search: React.FC = () => {
  const { handleInputChange } = useHandleFuzzySearch();
  const { handleKeyDown, focusedIndex } = useKeyEvent();
  const { handleSuggestionClick } = useSuggestionClick();

  const { inputValue, filteredPets, isShowFilteredList } = useSelector(
    (state: RootState) => state.useFuzzySearch
  );

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
    <>
      <style.AutocompleteContainer>
        <SearchIcon color={theme.colors.secondary} />
        <style.SearchInput
          type="text"
          placeholder={"Search for Pets"}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          aria-label="Search for Pets"
          autoComplete="off"
          filteredPets={filteredPets}
        />
        {inputValue && filteredPets.length > 0 && isShowFilteredList && (
          <style.FilteredList filteredPets={filteredPets}>
            {filteredPets.map((pet: Pet, index: number) => (
              <style.ListItem
                key={pet.id}
                focusedindex={focusedIndex === index}
                onClick={() => handleSuggestionClick(pet)}
              >
                <p>{highlightMatch(pet.name)}</p>
                <p>{highlightMatch(pet.species)}</p>
              </style.ListItem>
            ))}
          </style.FilteredList>
        )}
      </style.AutocompleteContainer>
    </>
  );
};

export default Search;
