import { useMemo } from "react";
import { useFuzzySearch } from "../../hooks/useFuzzySearch";
// import Results from "../../pages/home/Results";
import { SearchIcon } from "../../public/Icons/SearchIcon";
import theme from "../../styles/theme";
import { Button } from "../button/Button";
import { Pet } from "../types/pet";
import * as style from "./Search.Styles";

const Search: React.FC = () => {
  const {
    inputValue,
    filteredPets,
    filterListRef,
    handleInputChange,
    handleKeyDown,
    handleSuggestionClick,
    focusedIndex,
  } = useFuzzySearch();

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
      />
      {inputValue && filteredPets.length > 0 && (
        <style.FilteredList ref={filterListRef}>
          {filteredPets.map((pet: Pet, index: number) => (
            <style.ListItem key={pet.id} focusedindex={focusedIndex === index} onClick={()=>handleSuggestionClick(pet)}>
              <p>{highlightMatch(pet.name)}</p>
              <p>{highlightMatch(pet.species)}</p>
            </style.ListItem>
          ))}
        </style.FilteredList>
      )}
    </style.AutocompleteContainer>

    {/* Result section */}
    {filteredPets?.map((pet: Pet, index: number) => {
    return (<div style={{ display: 'flex' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px' }}>
      <img src={pet.photoUrl} alt={pet.name} style={{ width: '100px', height: '100px', marginBottom: '10px' }} />
      <div>{pet.name}</div>
      <Button
        variant="secondary"
        onClick={() => { }}
        borderRadius="20px"
      >
        View
      </Button>
    </div>
  </div>)
    })}
    </>
  );
};

export default Search;
