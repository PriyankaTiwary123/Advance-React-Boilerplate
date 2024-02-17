import { useState, useEffect } from "react";
import * as style from "./Search.Styles";
import { SearchIcon } from "../../public/Icons/SearchIcon";
import theme from "../../styles/theme";

interface Pet {
  id: string;
  name: string;
  species: string;
}

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [pets, setPets] = useState<Pet[]>([]);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://634e71874af5fdff3a5c61ba.mockapi.io/api/v1/pets"
        );
        const data: Pet[] = await response.json();
        setPets(data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter pets based on fuzzy search
    const results = pets.filter((pet) =>
      fuzzySearch(pet.name.toLowerCase(), inputValue.toLowerCase()) ||
      fuzzySearch(pet.species.toLowerCase(), inputValue.toLowerCase())
    );

    setFilteredPets(results);
  }, [inputValue, pets]);

  const fuzzySearch = (searchTerm: string, input: string) => {
    let i = 0;
    let j = 0;

    while (i < searchTerm.length && j < input.length) {
      if (searchTerm[i] === input[j]) {
        j++;
      }
      i++;
    }

    return j === input.length;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <style.AutocompleteContainer>
      {/* <style.SearchInputContainer> */}
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
            {filteredPets.map((pet) => (
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
