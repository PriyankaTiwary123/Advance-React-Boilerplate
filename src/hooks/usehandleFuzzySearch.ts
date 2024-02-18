import { useCallback, useRef, useState, useEffect } from "react";
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
  const listRef = useRef<HTMLUListElement>(null); // Reference to the list container
  const [isFilterListOpen, setIsFilterListOpen] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      !event.target ||
      !(event.target instanceof Node) ||
      !listRef.current?.contains(event.target) // Check if the click target is inside the filter list
    ) {
      // Close the filter list
      setIsFilterListOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to the document when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const updateFilteredPets = useCallback(
    (value: string) => {
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
        dispatch(setFilteredPets([]));
      }
    },
    [pets, dispatch]
  );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const enteredVal = event.target.value;
      dispatch(setInputValue(enteredVal));
      updateFilteredPets(enteredVal);
      enteredVal.trim() === ""
        ? dispatch(setShowFiltered(false))
        : dispatch(setShowFiltered(true));
      setIsFilterListOpen(enteredVal.trim() !== "");
    },
    [updateFilteredPets, dispatch]
  );

  return {
    handleInputChange,
    updateFilteredPets,
    listRef,
    isFilterListOpen,
  };
};
