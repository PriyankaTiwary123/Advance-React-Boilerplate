import { useSelector } from "react-redux";
import { RootState } from "../../appStore";
import { useHandleFuzzySearch } from "../../hooks/usehandleFuzzySearch";
import { useKeyEvent } from "../../hooks/useKeyEvent";
import { SearchIcon } from "../../public/Icons/SearchIcon";
import theme from "../../styles/theme";
import List from "../list/List";
import * as style from "./Search.Styles";

const Search: React.FC = () => {
  const { handleInputChange } = useHandleFuzzySearch();
  const { handleKeyDown } = useKeyEvent();

  const { inputValue, filteredPets, isShowFilteredList } = useSelector(
    (state: RootState) => state.useFuzzySearch
  );

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
          isShowFilteredList={isShowFilteredList}
        />
        {inputValue && filteredPets.length > 0 && isShowFilteredList && (
          <List
            inputValue={inputValue}
            filteredPets={filteredPets}
            isShowFilteredList={isShowFilteredList}
          />
        )}
      </style.AutocompleteContainer>
    </>
  );
};

export default Search;
