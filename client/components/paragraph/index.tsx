import React from "react";
import styled, { css } from "styled-components";

interface ParagraphProps {
  copy: string | number;
  faded?: boolean;
  fontSize?: string;
}

const StyledParagraph = styled.p<{ faded?: boolean; fontSize: string }>`
  line-height: 1.5;
  font-size: ${({ fontSize }) => fontSize || "14px"};
  color: ${({ faded }) =>
    faded &&
    css`
      var(--purpleHaze);
    `};
`;

const Paragraph = ({
  copy,
  faded = false,
  fontSize,
  ...props
}: ParagraphProps) => (
  <StyledParagraph faded={faded} fontSize={fontSize} {...props}>
    {copy}
  </StyledParagraph>
);

export default Paragraph;
