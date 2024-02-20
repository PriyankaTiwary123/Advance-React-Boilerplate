import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../appStore";
import { ChevronDown } from "../../public/Icons/ChevronDownIcon";
import {
  setFilteredPets,
  setFilteredPetsOnDropdown,
} from "../../store/slices/fuzzySearchSlice";
import theme from "../../styles/theme";
import { Pet } from "../types/pet";
import * as style from "./Dropdown.styles";

interface DropDownProps {
  label: string;
  isChevron: boolean;
  isMargin: boolean;
}

const Dropdown: React.FC<DropDownProps> = ({ label, isChevron }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { filteredPets } = useSelector(
    (state: RootState) => state.useFuzzySearch
  );

  const speciesSet: Set<string> = new Set(
    filteredPets.map((pet: Pet) => pet.species)
  );
  const speciesList: string[] = Array.from(speciesSet);

  const handleSorting = useCallback(() => {
    const sortedPets = [...filteredPets].sort((a: Pet, b: Pet) => {
      const dateA =
        a.dateAdded && new Date(a.dateAdded.split("-").reverse().join("-"));
      const dateB =
        b.dateAdded && new Date(b.dateAdded.split("-").reverse().join("-"));

      if (dateA && dateB) {
        return dateB.getTime() - dateA.getTime();
      }
      return 0;
    });
    dispatch(setFilteredPets(sortedPets));
  }, [filteredPets]);

  const onHandleFilterClick = (isChevron: boolean) => {
    isChevron ? setIsOpen(!isOpen) : handleSorting();
  };

  const handleOptionClick = (species: string) => {
    setIsOpen(false); // Close the dropdown list when an option is clicked
    dispatch(setFilteredPetsOnDropdown(species)); // Filter pets based on the selected species
  };

  return (
    <>
      <style.DropdownButton
        isMargin
        onClick={() => onHandleFilterClick(isChevron)}
        disabled={filteredPets.length === 0}
      >
        <style.ButtonText>{label}</style.ButtonText>
        {isChevron && <ChevronDown color={theme.colors.textGrayDark} />}
      </style.DropdownButton>
      {isChevron && speciesList.length > 0 && (
        <style.DropdownContent isOpen={isOpen} sameWidth={isOpen}>
          {speciesList.map((species: string, index: number) => (
            <style.DropdownOption
              key={index}
              onClick={() => handleOptionClick(species)} // Close the dropdown list on option click
            >
              {species}
            </style.DropdownOption>
          ))}
        </style.DropdownContent>
      )}
    </>
  );
};

export default Dropdown;
