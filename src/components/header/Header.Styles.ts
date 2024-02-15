import styled, { css } from "styled-components";
import breakpoints from "../../constants/breakpoints";
import flexMixins from "../../styles/flexMixins";
import theme from "../../styles/theme";

const headerStyles = css`
  width: 100vw;
  height: 60px;
  ${flexMixins.flexRowStart}
`;

export const HeaderContainer = styled.header`
  background: ${theme.colors.primaryYellow};
  ${headerStyles};

  @media (max-width: ${breakpoints.mobile}) {
    background-color: transparent;
  }
`;
export const ImageContainer = styled.img`
  margin-left: 30px;
`;
