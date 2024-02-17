import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import flexMixins from "../../styles/flexMixins";
import theme from "../../styles/theme";

export const DropDownContainer = styled.div<{ spacing?: string }>`
  display: flex;
  margin-top: 24px;
  width: 100%;
`;

export const PetDirectoryContainer = styled.div`
  display: flex;
  height: 300px;
  @media (max-width: ${breakpoints.mobile}) {
    height: 250px;
    display: inline-block;
    overflow: hidden;
  }
`;

export const TreatsImage = styled.img`
  width: 90%;
  border-radius: 20px 0px 0px 20px;
  height: auto;
  object-fit: cover;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    border-radius: 0;
  }
`;

export const DirectoryDetail = styled.div`
  background: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  ${flexMixins?.flexColumnCenter};
  align-items: flex-start;
  border-radius: 0px 20px 20px 0px;
  text-wrap: balance;
  padding-left: 16px;
  button {
    margin-top: 16px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const MobileDetails = styled.div`
  display: none;
  @media (max-width: ${breakpoints.mobile}) {
    display: block;
  }
`;

export const Details = styled.div``;

export const CategoryContainer = styled.div`
  ${flexMixins?.flexRowBetween};
  margin-top: 16px;
  @media (max-width: ${breakpoints.mobile}) {
    overflow-x: scroll;
    margin-left: 16px;
  }
`;

export const Category = styled.div<{ totalCategory: number }>`
  border-radius: 10px;
  min-width: ${({ totalCategory }) => 100 / totalCategory}%;
  height: 80px;
  ${flexMixins?.flexRowCenter};
  background: ${theme.colors.textGrayLight};
  align-items: baseline;
  margin-right: 10px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-shrink: 0;
    min-width: ${100 / 2}%;
  }
`;

export const CategoryImage = styled.div`
  position: relative;
  bottom: 15px;
`;

export const DirectoryDetailMobile = styled.div`
  display: none;
  @media (max-width: ${breakpoints.mobile}) {
    background: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    ${flexMixins.flexRowBetween};
    width: 100%;
    height: 60px;
  }
`;
