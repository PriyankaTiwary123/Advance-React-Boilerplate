import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";
import flexMixins from "../../../styles/flexMixins";
import theme from "../../../styles/theme";

export const CategoryContainer = styled.div`
  ${flexMixins.flexRowBetween};
  margin: 24px 0px;
  @media (max-width: ${breakpoints.mobile}) {
    overflow-x: scroll;
    margin-left: 16px;
  }
`;

export const Category = styled.div`
  border-radius: 10px;
  height: 80px;
  ${flexMixins.flexRowCenter};
  background: ${theme.colors.textGrayLight};
  align-items: baseline;
  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 10px;
  }
`;

export const CategoryImage = styled.div`
  position: relative;
  bottom: 15px;
`;

export const categoryContent = styled.div<{ totalCategory: number }>`
  width: ${({ totalCategory }) => 100 / totalCategory - 2}%;
  @media (max-width: ${breakpoints.mobile}) {
    flex-shrink: 0;
    min-width: 50%;
  }
`;

export const categoryName = styled.div`
  margin-top: 8px;
  font-weight: bold;
`;
