import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPets,
  setError,
  setInputValue,
  setFilteredPets,
} from "../store/slices/fuzzySearchSlice";
import { BASE_URL } from "../constant";
import { fuzzySearch } from "../utils/helper";
import { Pet } from "../components/types/pet";
import { RootState } from "../appStore";

export const useFuzzySearch = () => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const dispatch = useDispatch();
  const { pets, error, inputValue, filteredPets } = useSelector(
    (state: RootState) => state.useFuzzySearch
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data: Pet[] = await response.json();
        dispatch(setPets(data));
      } catch (error) {
        dispatch(setError("Error fetching pets"));
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    // Filter pets based on fuzzy search
    const results = pets.filter(
      (pet: Pet) =>
        fuzzySearch(pet.name.toLowerCase(), inputValue.toLowerCase()) ||
        fuzzySearch(pet.species.toLowerCase(), inputValue.toLowerCase())
    );

    dispatch(setFilteredPets(results));
  }, [inputValue, pets, dispatch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(event.target.value));
  };

  const handleSuggestionClick = (suggestion: Pet) => {
    const trimmedInputValue = (suggestion?.name ?? "").trim();
    setInputValue(trimmedInputValue);
    dispatch(setFilteredPets([]))
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      setFocusedIndex((prevIndex) =>
        prevIndex === null || prevIndex === filteredPets.length-1
          ? 0
          : prevIndex + 1
      );
    } else if (event.key === "ArrowUp") {
      setFocusedIndex((prevIndex) =>
        prevIndex === null || prevIndex === 0
          ? filteredPets.length-1
          : prevIndex - 1
      );
    } else if (event.key === "Enter") {
      if (focusedIndex !== null) {
        handleSuggestionClick(filteredPets[focusedIndex]);
      }
    }
  };

  return { inputValue, filteredPets, pets, error, focusedIndex, handleInputChange, handleKeyDown };
};
