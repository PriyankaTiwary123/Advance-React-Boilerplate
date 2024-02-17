import { useDispatch } from "react-redux";
import {
  setInputValue,
  setFilteredPets,
} from "../store/slices/fuzzySearchSlice";
import { fuzzySearch } from "../utils/helper";
import { BASE_URL } from "../constant";
import { Pet } from "../components/types/pet";

export const useHandleFuzzySearch = () => {
  const dispatch = useDispatch();

  const updateFilteredPets = async (value: string) => {
    try {
      if (value.trim() === "") {
        dispatch(setFilteredPets([])); // Clear filtered pets if the input value is empty
      } else {
        const response = await fetch(BASE_URL);
        const data: Pet[] = await response.json();
        const results = data.filter(
          (pet: Pet) =>
            fuzzySearch(pet.name.toLowerCase(), value.toLowerCase()) ||
            fuzzySearch(pet.species.toLowerCase(), value.toLowerCase())
        );
        dispatch(setFilteredPets(results));
      }
    } catch (error) {
      // Handle error
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredVal = event.target.value;
    dispatch(setInputValue(enteredVal));
    updateFilteredPets(enteredVal); // Update filteredPets when input value changes
  };

  return {
    handleInputChange,
  };
};
