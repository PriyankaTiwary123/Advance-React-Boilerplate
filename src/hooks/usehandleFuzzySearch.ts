import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setInputValue,
  setFilteredPets,
  setShowFiltered,
} from "../store/slices/fuzzySearchSlice";
import { RootState } from "../appStore";
import { Pet } from "../components/types/pet";

export const useHandleFuzzySearch = () => {
  const { pets } = useSelector((state: RootState) => state.useFuzzySearch);
  const dispatch = useDispatch();


  const updateFilteredPets = useCallback((value: string) => {
    const keywords = value.toLowerCase().split(" ");
    if (value.trim() !== "") {
      const results = pets.filter((pet: Pet) => {
        return keywords.every((keyword) => {
          return (
            pet.name.toLowerCase().includes(keyword) ||
            pet.species.toLowerCase().includes(keyword)
          );
        });
      });
      dispatch(setFilteredPets(results));
    } else {
      dispatch(setFilteredPets([]))
    }
  }, [pets, dispatch]);

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredVal = event.target.value;
    dispatch(setInputValue(enteredVal));
    updateFilteredPets(enteredVal);
    enteredVal.trim() === ""
      ? dispatch(setShowFiltered(false))
      : dispatch(setShowFiltered(true));
  }, [updateFilteredPets, dispatch]);

  return {
    handleInputChange,
    updateFilteredPets,
  };
};
