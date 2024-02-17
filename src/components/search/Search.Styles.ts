import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import flexMixins from "../../styles/flexMixins";
import theme from "../../styles/theme";

export const AutocompleteContainer = styled.div`
  position: relative;
  display: flex;
  width: 60%;
  svg{
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

export const FilteredList = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid ${theme.colors.textGray};
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ListItem = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid ${theme.colors.textGray};
  &:last-child {
    border-bottom: none;
  }
`;
