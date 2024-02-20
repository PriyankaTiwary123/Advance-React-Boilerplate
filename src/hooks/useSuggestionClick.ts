import { useDispatch } from "react-redux";
import {
  setInputValue,
  setShowFiltered,
} from "../store/slices/fuzzySearchSlice";
import { Pet } from "../components/types/pet";
import { useHandleFuzzySearch } from "./usehandleFuzzySearch";

export const useSuggestionClick = () => {
  const dispatch = useDispatch();
  const { updateFilteredPets } = useHandleFuzzySearch();

  const handleSuggestionClick = (suggestion: Pet) => {
    const trimmedInputValue = (suggestion?.name ?? "").trim();
    dispatch(setInputValue(trimmedInputValue));
    updateFilteredPets(trimmedInputValue);
    dispatch(setShowFiltered(false));
  };

  return {
    handleSuggestionClick,
  };
};
