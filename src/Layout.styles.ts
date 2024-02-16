import styled from "styled-components";
import breakpoints from "./constants/breakpoints";

export const Content = styled.div`
  margin: 0 auto;
  padding: 15px;
  max-width: 1140px;
  width: 100%;
  
  /* Styles specific to mobile */
  @media (max-width: ${breakpoints.mobile}) {
    background-color: transparent;
    padding: 16px;
    max-width: none;
    width: auto;
  }
`;
