import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import flexMixins from "../../styles/flexMixins";
import theme from "../../styles/theme";

export const AutocompleteContainer = styled.div`
  position: relative;
  ${flexMixins.flexRowStart}
  @media (max-width: ${breakpoints.mobile}) {
    margin: 16px;
  }
`;

export const SearchInput = styled.input`
  border: 1px solid ${theme.colors.textGray};
  color: ${theme.colors.textGray};
  padding: 20px 60px;
  font-size: 16px;
  border-radius: 30px;
  outline: none;
  width: 60%;

  /* Styles specific to mobile */
  @media (max-width: ${breakpoints.mobile}) {
    background-color: ${theme.colors.textGrayLight};
    border: 1px solid ${theme.colors.textGrayLight};
    color: ${theme.colors.textGray};
    width: 100%;
  }
`;

export const SearchIconContainer = styled.span`
  position: absolute;
  margin-left: 24px;
`;
