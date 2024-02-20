import styled, { css } from "styled-components";
import breakpoints from "../../styles/breakpoints";
import flexMixins from "../../styles/flexMixins";
import theme from "../../styles/theme";

const buttonBase = css`
  background-color: transparent;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  color: ${theme.colors.textPrimary};
  border: 1px solid ${theme.colors.textGray};
  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px 16px;
  }
`;

export const DropdownButton = styled.button<{ isMargin?: boolean }>`
  ${buttonBase}
  ${flexMixins.flexRowCenter}
  svg {
    margin-left: 8px;
  }
  ${(props) =>
    props.isMargin &&
    css`
      margin-left: 16px; /* Add space from the second button */
    `}
`;


export const ButtonText = styled.div``;

export const DropdownContent = styled.div<{ isOpen: boolean; sameWidth: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  background-color: white;
  padding: 10px 20px;
  border: 1px solid ${theme.colors.textGrayLight};
  margin-left: 12px;
  margin-top: 36px;
  z-index: 1;
`;

export const DropdownOption = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #ddd;
  }
`;
