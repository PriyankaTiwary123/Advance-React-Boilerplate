import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const ContentContainer = styled.div`
margin: 0 auto;
max-width: 1140px;

@media (max-width: ${breakpoints.mobile}) {
  background-color: transparent;
  max-width: none;
  padding: 0;
  width: auto;
  h1{
    margin-left: 16px;
  }`;

export const DropDownContainer = styled.div<{ spacing?: string }>`
  display: flex;
  margin-top: 24px;
  width: 100%;
`;





