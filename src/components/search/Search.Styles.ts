import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import flexMixins from "../../styles/flexMixins";
import theme from "../../styles/theme";

export const AutocompleteContainer = styled.div`
  position: relative;
  display: flex;
  width: 60%;
  svg {
    position: absolute;
    margin-left: 16px;
  }
  ${flexMixins.flexRowStart}
  @media (max-width: ${breakpoints.mobile}) {
    margin: 16px;
  }
`;

export const SearchInputContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  border: 1px solid ${theme.colors.textGray};
  color: ${theme.colors.textGrayDark};
  padding: 20px 60px;
  font-size: 16px;
  border-radius: 30px;
  outline: none;
  width: 100%;

  /* Styles specific to mobile */
  @media (max-width: ${breakpoints.mobile}) {
    background-color: ${theme.colors.textGrayLight};
    border: 1px solid ${theme.colors.textGrayLight};
    color: ${theme.colors.textGray};
  }
`;

export const FilteredList = styled.ul`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: ${theme.colors.primary};
  padding: 0;
  border: 1px solid ${theme.colors.textGray};
  border-radius: 5px;
  list-style-type: none;
`;

export const ListItem = styled.li<{ focusedIndex?: number }>`
  padding: 8px 12px;
  cursor: pointer;
  background: ${({ focusedIndex }) =>
    focusedIndex ? theme.colors.textGrayLight : "transparent"};
  color: ${theme.colors.textGrayDark};
  border-bottom: 1px solid ${theme.colors.textGray};
  &:last-child {
    border-bottom: none;
  }
`;

export const HighlightedText = styled.span`
  font-weight: bold;
  color: ${theme.colors.textPrimary};
`;
