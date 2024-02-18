import { useMemo } from "react";
import { useKeyEvent } from "../../hooks/useKeyEvent";
import { useSuggestionClick } from "../../hooks/useSuggestionClick";
import { Pet } from "../types/pet";
import * as style from "./List.styles";

interface ListProps {
  inputValue: string;
  filteredPets: Pet[];
  isShowFilteredList: boolean;
}

const List: React.FC<ListProps> = ({
  inputValue,
  filteredPets,
  isShowFilteredList,
}) => {
  const { handleSuggestionClick } = useSuggestionClick();
  const { focusedIndex } = useKeyEvent();

  const highlightMatch = useMemo(() => {
    const memoizedMatchingText = (text: string) => {
      const index = text?.toLowerCase().indexOf(inputValue?.toLowerCase());
      if (index !== -1) {
        return (
          <>
            <style.HighlightedText>
              {text?.substring(0, index)}
            </style.HighlightedText>
            {text?.substring(index, index + inputValue.length)}
            <style.HighlightedText>
              {text?.substring(index + inputValue.length)}
            </style.HighlightedText>
          </>
        );
      }
      return text;
    };

    return memoizedMatchingText;
  }, [filteredPets]);

  return (
    <div>
      <style.FilteredList isShowFilteredList={isShowFilteredList}>
        {filteredPets.map((pet: Pet, index: number) => (
          <style.ListItem
            key={pet.id}
            focusedindex={focusedIndex === index}
            onClick={() => handleSuggestionClick(pet)}
          >
            <p>{highlightMatch(pet.name)}</p>
            <p>{highlightMatch(pet.species)}</p>
          </style.ListItem>
        ))}
      </style.FilteredList>
    </div>
  );
};

export default List;
