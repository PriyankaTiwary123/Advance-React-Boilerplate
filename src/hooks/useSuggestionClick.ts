import { useDispatch } from "react-redux";
import { setInputValue } from "../store/slices/fuzzySearchSlice";
import { Pet } from "../components/types/pet";
import { useHandleFuzzySearch } from "./usehandleFuzzySearch";
import { useState } from "react";

export const useSuggestionClick = () => {
  const [showFilteredList, setShowFilteredList] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { updateFilteredPets } = useHandleFuzzySearch();

  const handleSuggestionClick = (suggestion: Pet) => {
    const trimmedInputValue = (suggestion?.name ?? "").trim();
    dispatch(setInputValue(trimmedInputValue));
    updateFilteredPets(trimmedInputValue);
    setShowFilteredList(false);
  };

  return {
    handleSuggestionClick,
    showFilteredList,
    setShowFilteredList
  };
};
