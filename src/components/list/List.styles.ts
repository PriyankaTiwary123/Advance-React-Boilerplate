import styled from "styled-components";
import theme from "../../styles/theme";

export const FilteredList = styled.ul<{ isShowFilteredList: boolean }>`
  position: absolute;
  top: calc(100% + (-16px));
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  box-sizing: border-box;
  background-color: ${theme.colors.primary};
  padding: 0;
  border: 1px solid ${({ isShowFilteredList })=> isShowFilteredList ? theme.colors.secondary: theme.colors.primary};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  list-style-type: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ListItem = styled.li<{ focusedindex?: boolean }>`
  padding: 0px 12px;
  cursor: pointer;
  line-height: 0.5;
  background: ${({ focusedindex }) =>
    focusedindex ? theme.colors.textGrayLight : "transparent"};
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