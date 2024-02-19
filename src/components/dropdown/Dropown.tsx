import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../appStore";
import { ChevronDown } from "../../public/Icons/ChevronDownIcon";
import theme from "../../styles/theme";
import { Pet } from "../types/pet";
import * as style from "./Dropdown.styles";

interface DropDownProps {
  label: string;
  isChevron: boolean;
  isMargin: boolean;
}

const Dropdown: React.FC<DropDownProps> = ({ label, isChevron }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { filteredPets } = useSelector((state: RootState) => state.useFuzzySearch);

  const speciesSet: Set<string> = new Set(filteredPets.map((pet: Pet) => pet.species));
  const speciesList: string[] = Array.from(speciesSet);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false); // Close the dropdown list when an option is clicked
  };

  return (
    <>
      <style.DropdownButton isMargin onClick={toggleDropdown}>
        <style.ButtonText>{label}</style.ButtonText>
        {isChevron && <ChevronDown color={theme.colors.textGrayDark} />}
      </style.DropdownButton>
      {isChevron && (
        <style.DropdownContent isOpen={isOpen}>
          {speciesList.map((species: string, index: number) => (
            <style.DropdownOption
              key={index}
              href="#"
              onClick={handleOptionClick} // Close the dropdown list on option click
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
