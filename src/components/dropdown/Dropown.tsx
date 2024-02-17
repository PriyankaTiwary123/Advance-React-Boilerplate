import { useState } from "react";
import { ChevronDown } from "../../public/Icons/ChevronDownIcon";
import theme from "../../styles/theme";
import * as style from "./Dropdown.styles";

interface DropDownProps {
  label: string;
  isChevron: boolean;
  isMargin: boolean
}

// Dropdown component
const Dropdown: React.FC<DropDownProps> = ({ label, isChevron, isMargin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <style.DropdownButton isMargin onClick={toggleDropdown}>
        <style.ButtonText>{label}</style.ButtonText>
        {isChevron && <ChevronDown color={theme.colors.textGrayDark} />}
      </style.DropdownButton>
      {isChevron && (
        <style.DropdownContent isOpen={isOpen}>
          <style.DropdownOption href="#">Option 1</style.DropdownOption>
        </style.DropdownContent>
      )}
    </>
  );
};

export default Dropdown;
