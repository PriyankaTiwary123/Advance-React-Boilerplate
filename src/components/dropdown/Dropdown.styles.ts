import styled, { css } from "styled-components";
import breakpoints from "../../styles/breakpoints";
import flexMixins from "../../styles/flexMixins";
import theme from "../../styles/theme";

const buttonBase = ({ disabled }: { disabled: boolean }) => css`
  background: ${disabled ? theme.colors.textGrayLight : "transparent"};
  border-radius: 20px;
  padding: 10px 20px;
  cursor: ${disabled ? "not-allowed" : "pointer"};
  color: ${theme.colors.textPrimary};
  border: 1px solid ${theme.colors.textGray};
  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px 16px;
  }
`;

export const DropdownButton = styled.button<{
  isMargin?: boolean;
  disabled: boolean;
}>`
  ${({ disabled }) => buttonBase({ disabled })};
  ${flexMixins.flexRowCenter}
  svg {
    margin-left: 8px;
  }
  ${({ isMargin }) =>
    isMargin &&
    css`
      margin-left: 16px;
    `}
`;

export const ButtonText = styled.div`
  color: ${theme.colors.textGrayDark};
`;

export const DropdownContent = styled.div<{
  isOpen: boolean;
  sameWidth: boolean;
}>`
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
