import { useSelector } from "react-redux";
import { RootState } from "../../appStore";
import { useHandleFuzzySearch } from "../../hooks/usehandleFuzzySearch";
import { useKeyEvent } from "../../hooks/useKeyEvent";
import { SearchIcon } from "../../public/Icons/SearchIcon";
import theme from "../../styles/theme";
import List from "../list/List";
import * as style from "./Search.Styles";

const Search: React.FC = () => {
  const { handleInputChange, isFilterListOpen, listRef } =
    useHandleFuzzySearch();
  const { handleKeyDown, focusedIndex } = useKeyEvent();

  // Redux state
  const { inputValue, filteredPets, isShowFilteredList } = useSelector(
    (state: RootState) => state.useFuzzySearch
  );

  return (
    <>
      {/* Autocomplete container */}
      <style.AutocompleteContainer>
        {/* Search icon */}
        <SearchIcon color={theme.colors.secondary} aria-hidden="true" />

        {/* Search input */}
        <style.SearchInput
          type="text"
          placeholder="Search for Pets"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          aria-label="Search for Pets"
          autoComplete="off"
          isShowFilteredList={isShowFilteredList}
          aria-expanded={isShowFilteredList}
          aria-haspopup={isShowFilteredList ? "listbox" : undefined}
        />

        {/* Filtered list */}
        {inputValue &&
          filteredPets.length > 0 &&
          isShowFilteredList &&
          isFilterListOpen && (
            <List
              inputValue={inputValue}
              filteredPets={filteredPets}
              focusedIndex={focusedIndex}
              isShowFilteredList={isShowFilteredList}
              listRef={listRef}
            />
          )}
      </style.AutocompleteContainer>
    </>
  );
};

export default Search;
