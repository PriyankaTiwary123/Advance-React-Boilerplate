import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../appStore";
import { useSuggestionClick } from "./useSuggestionClick";

export const useKeyEvent = () => {
  const { filteredPets } = useSelector(
    (state: RootState) => state.useFuzzySearch
  );

  const { handleSuggestionClick } = useSuggestionClick();
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("Key pressed:", event.key);
    console.log("Current focusedIndex:", focusedIndex);

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
    focusedIndex,
    handleKeyDown,
  };
};
