import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import flexMixins from "../../styles/flexMixins";
import theme from "../../styles/theme";

// Styled component for the autocomplete container
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
    width: 90%;
  }
`;

// Styled component for the search input container
export const SearchInputContainer = styled.div`
  position: relative;
`;

// Styled component for the search input field
export const SearchInput = styled.input<{ isShowFilteredList: boolean }>`
  border: 1px solid
    ${({ isShowFilteredList }) =>
      isShowFilteredList ? theme.colors.secondary : theme.colors.textGray};
  color: ${theme.colors.textGrayDark};
  padding: 20px 60px;
  font-size: 16px;
  border-radius: ${({ isShowFilteredList }) =>
    isShowFilteredList ? "0px" : "30px"};
  border-top-left-radius: ${({ isShowFilteredList }) =>
    isShowFilteredList ? "5px" : "30px"};
  border-top-right-radius: ${({ isShowFilteredList }) =>
    isShowFilteredList ? "5px" : "30px"};
  border-bottom: ${({ isShowFilteredList }) =>
    isShowFilteredList ? "none" : `1px solid ${theme.colors.textGray}`};
  outline: none;
  width: 100%;
  box-shadow: ${({ isShowFilteredList }) =>
    isShowFilteredList ? `0px 2px 4px ${theme.colors.textGray}` : "none"};
  @media (max-width: ${breakpoints.mobile}) {
    background: ${({ isShowFilteredList }) =>
      isShowFilteredList ? theme.colors.primary : theme.colors.textGrayLight};
    border: 1px solid
      ${({ isShowFilteredList }) =>
        isShowFilteredList
          ? theme.colors.secondary
          : theme.colors.textGrayLight};
  }
`;
