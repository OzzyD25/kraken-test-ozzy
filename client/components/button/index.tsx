import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  onClick: () => void;
  copy?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background: ${css`var(--sohoLights)`};
  color: ${css`var(--hemocyanin)`};
  border: 0px;
  cursor: pointer;
  border-radius: 4px;
  padding: 4px 8px;
  height: ${({ height }) => height || "40px"};
  width: ${({ width }) => width || "auto"};

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      background: ${css`var(--plum)`};
      color: var(--ice);
    `};
`;

const Button = ({
  copy,
  disabled,
  width,
  height,
  onClick,
  ...props
}: ButtonProps) => (
  <StyledButton
    disabled={disabled}
    width={width}
    height={height}
    onClick={onClick}
    {...props}
  >
    {copy || "Submit"}
  </StyledButton>
);

export default Button;
