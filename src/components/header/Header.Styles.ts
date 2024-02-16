import styled, { css } from "styled-components";
import breakpoints from "../../constants/breakpoints";
import flexMixins from "../../styles/flexMixins";
import theme from "../../styles/theme";

const headerStyles = css`
  width: 100vw;
  height: 60px;
  ${flexMixins.flexRowStart};
`;

export const HeaderContainer = styled.header`
  background: ${theme.colors.accentYellow};
  ${headerStyles};

  /* Styles specific to mobile */
  @media (max-width: ${breakpoints.mobile}) {
    background-color: transparent;
  }
`;
export const ImageContainer = styled.img`
  margin-left: 30px;
  
  /* Styles specific to mobile */
  @media (max-width: ${breakpoints.mobile}) {
  margin: 20px 0px 0px 16px;
  }
`;
