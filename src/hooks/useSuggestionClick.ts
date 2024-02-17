import { useDispatch } from "react-redux";
import {
  setInputValue,
  setFilteredPets,
} from "../store/slices/fuzzySearchSlice";
import { Pet } from "../components/types/pet";

export const useSuggestionClick = () => {
  const dispatch = useDispatch();

  const handleSuggestionClick = (suggestion: Pet) => {
    const trimmedInputValue = (suggestion?.name ?? "").trim();
    dispatch(setInputValue(trimmedInputValue));
    dispatch(setFilteredPets([]));
  };

  return {
    handleSuggestionClick,
  };
};
