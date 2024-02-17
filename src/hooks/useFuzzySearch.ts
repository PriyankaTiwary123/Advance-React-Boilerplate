import { useEffect } from "react";
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

  return { inputValue, filteredPets, pets, error, handleInputChange };
};
