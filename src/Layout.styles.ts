import styled from "styled-components";
import breakpoints from "./styles/breakpoints";

export const Content = styled.div`
  margin: 0 auto;
  padding: 16px;
  max-width: 1140px;

  /* Styles specific to mobile */
  @media (max-width: ${breakpoints.mobile}) {
    background-color: transparent;
    max-width: none;
    padding: 0;
    width: auto;
  }
`;
