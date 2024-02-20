import styled from "styled-components";
import theme from "../../styles/theme";
import { ButtonProps } from "./Button";

export const ButtonWrapper = styled.button<ButtonProps>`
  /* Base styles */
  border: none;
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  width: fit-content; /* Set width to fit content */

  /* Variant styles */
  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.secondary};
        `;
      case "secondary":
        return `
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.primary};
        `;
      default:
        return `
          background-color: #fff;
          color: #333;
          border: 1px solid #ccc;
        `;
    }
  }}

  /* Size styles */
  ${({ size }) => {
    switch (size) {
      case "small":
        return `
         padding: 10px 30px;
          font-size: 12px;
        `;
      case "large":
        return `
          padding: 10px 20px;
          font-size: 18px;
        `;
      default:
        return `
         padding: 16px 80px;
          font-size: 14px;
        `;
    }
  }}

  &:hover {
    opacity: 0.8;
  }
`;
