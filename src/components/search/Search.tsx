import * as style from "./Search.Styles";
import { SearchIcon } from "../../public/Icons/SearchIcon";
import theme from "../../styles/theme";
import { useFuzzySearch } from "../../hooks/useFuzzySearch";
import { Pet } from "../types/pet";

const Search: React.FC = () => {
 const  { inputValue, filteredPets, handleInputChange}= useFuzzySearch()
  
  return (
    <style.AutocompleteContainer>
      <SearchIcon color={theme.colors.secondary} />

        <style.SearchInput
          type="text"
          placeholder={"Search for pets by name or species"}
          value={inputValue}
          onChange={handleInputChange}
          aria-label="Search"
          autoComplete="off"
        />
        {inputValue && (
          <style.FilteredList>
            {filteredPets.map((pet: Pet) => (
              <style.ListItem key={pet.id}>
                <p>{pet.name}</p>
                <p>{pet.species}</p>
              </style.ListItem>
            ))}
          </style.FilteredList>
        )}
    </style.AutocompleteContainer>
  );
};

export default Search;
