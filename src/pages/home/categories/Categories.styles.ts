import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";
import flexMixins from "../../../styles/flexMixins";
import theme from "../../../styles/theme";

export const CategoryContainer = styled.div`
  ${flexMixins.flexRowBetween};
  margin-top: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    overflow-x: scroll;
    margin-left: 16px;
  }
`;

export const Category = styled.div<{ totalCategory: number }>`
  border-radius: 10px;
  min-width: ${({ totalCategory }) => (100 / totalCategory)}%;
  height: 80px;
  ${flexMixins.flexRowCenter};
  background: ${theme.colors.textGrayLight};
  align-items: baseline;
  margin-right: 10px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-shrink: 0;
    min-width: 50%;
  }
`;

export const CategoryImage = styled.div`
  position: relative;
  bottom: 15px;
`;
