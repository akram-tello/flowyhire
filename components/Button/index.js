import { StyledButton } from "./ButtonElements";

export const Button = ({
  color,
  fixedWidth,
  children,
  onClick,
}) => (
  <StyledButton color={color} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledButton>
);