// useFuzzySearch.ts

import { useEffect, useState, useRef } from "react";
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
  const filterListRef = useRef<HTMLDivElement>(null);

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
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterListRef.current &&
        !filterListRef.current.contains(event.target as Node)
      ) {
        dispatch(setFilteredPets([]));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(event.target.value));
    updateFilteredPets(); // Update filteredPets when input value changes
  };

  const updateFilteredPets = async () => {
    try {
      const response = await fetch(BASE_URL);
      const data: Pet[] = await response.json();
      const results = data.filter(
        (pet: Pet) =>
          fuzzySearch(pet.name.toLowerCase(), inputValue.toLowerCase()) ||
          fuzzySearch(pet.species.toLowerCase(), inputValue.toLowerCase())
      );
      dispatch(setFilteredPets(results));
    } catch (error) {
      dispatch(setError("Error fetching pets"));
    }
  };

  const handleSuggestionClick = (suggestion: Pet) => {
    const trimmedInputValue = (suggestion?.name ?? "").trim();
    dispatch(setInputValue(trimmedInputValue));
    dispatch(setFilteredPets([]));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      setFocusedIndex((prevIndex) =>
        prevIndex === null || prevIndex === filteredPets.length - 1
          ? 0
          : prevIndex + 1
      );
    } else if (event.key === "ArrowUp") {
      setFocusedIndex((prevIndex) =>
        prevIndex === null || prevIndex === 0
          ? filteredPets.length - 1
          : prevIndex - 1
      );
    } else if (event.key === "Enter") {
      if (focusedIndex !== null) {
        handleSuggestionClick(filteredPets[focusedIndex]);
      }
    }
  };

  return {
    inputValue,
    filteredPets,
    pets,
    error,
    focusedIndex,
    filterListRef,
    handleInputChange,
    handleSuggestionClick,
    handleKeyDown,
  };
};
