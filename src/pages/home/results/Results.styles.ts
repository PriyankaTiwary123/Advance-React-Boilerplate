import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";
import flexMixins from "../../../styles/flexMixins";
import theme from "../../../styles/theme";

export const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${breakpoints.mobile}) {
    display: block;
    margin: 16px;
  }
`;

export const PetContent = styled.div<{ ismobile?: boolean }>`
  width: 30%;
  margin: 0px 0px 20px 24px;
  button {
    margin-top: ${({ ismobile }) =>
      ismobile ? "0" : "16px"}; /* Adjust margin based on ismobile prop */
    display: ${({ ismobile }) =>
      ismobile ? "none" : "inline-block"}; /* Hide button for mobile */
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    margin: 0;
    ${flexMixins.flexRowBetween};
  }
`;

export const PetAvatar = styled.img`
  margin-bottom: 10px;
  object-fit: cover;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  @media (max-width: ${breakpoints.mobile}) {
    height: 200px;
    width: 200px;
  }
`;

export const RedirectContainer = styled.div`
  background: ${theme.colors.secondary};
  border-radius: 24px;
  padding: 10px;
`;