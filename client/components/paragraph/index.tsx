import React from "react";
import styled, { css, CSSProp } from "styled-components";

interface ParagraphProps {
  copy: string | number;
  custom?: CSSProp;
  fontSize?: string;
  title?: string;
}

const StyledParagraph = styled.p<{ custom?: CSSProp; fontSize: string }>`
  line-height: 1.5;
  font-size: ${({ fontSize }) => fontSize};
  ${({ custom }) => custom};
`;

const Paragraph = ({
  copy,
  custom = css``,
  fontSize = "14px",
  title,
  ...props
}: ParagraphProps) => (
  <StyledParagraph custom={custom} fontSize={fontSize} title={title} {...props}>
    {copy}
  </StyledParagraph>
);

export default Paragraph;
