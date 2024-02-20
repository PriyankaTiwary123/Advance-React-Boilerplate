import { FC, ReactNode } from "react";
import * as style from "./Button.Styles";

export interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "small" | "default" | "large";
  onClick?: () => void;
  borderRadius?: string;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  borderRadius = "4px",
  onClick,
  children,
}) => {
  return (
    <style.ButtonWrapper
      variant={variant}
      size={size}
      onClick={onClick}
      borderRadius={borderRadius}
    >
      {children}
    </style.ButtonWrapper>
  );
};
