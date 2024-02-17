import * as style from "./Search.Styles";
import { SearchIcon } from "../../public/Icons/SearchIcon";
import theme from "../../styles/theme";

const Search: React.FC = () => {
  return (
    <style.AutocompleteContainer>
      <style.SearchIconContainer>
        <SearchIcon color={theme.colors.secondary}/>
      </style.SearchIconContainer>
      <style.SearchInput
        type="text"
        placeholder={"Search for pets"}
        value=""
        onChange=""
        aria-label="Search"
        autoComplete="off"
      />
    </style.AutocompleteContainer>
  );
};

export default Search;
