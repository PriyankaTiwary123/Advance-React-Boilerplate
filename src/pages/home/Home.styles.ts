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
  border-radius: 20px;
  @media (max-width: ${breakpoints.mobile}) {
    height: 200px;
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
`;

export const Category = styled.div`
  border-radius: 10px;
  width: 18%;
  height: 80px;
  ${flexMixins?.flexRowCenter};
  background: ${theme.colors.textGrayLight};
  align-items: baseline;
`;

export const CategoryImage = styled.div`
  position: relative;
  bottom: 15px;
`;
