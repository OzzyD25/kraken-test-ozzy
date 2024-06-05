import React from "react";
import styled, { css, CSSProp } from "styled-components";

interface ParagraphProps {
  copy: string | number;
  customStyles?: CSSProp;
  fontSize?: string;
  title?: string;
}

const StyledParagraph = styled.p<{ customStyles?: CSSProp; fontSize: string }>`
  line-height: 1.5;
  font-size: ${({ fontSize }) => fontSize};
  ${({ customStyles }) => customStyles};
`;

const Paragraph = ({
  copy,
  customStyles = css``,
  fontSize = "14px",
  title,
  ...props
}: ParagraphProps) => (
  <StyledParagraph
    customStyles={customStyles}
    fontSize={fontSize}
    title={title}
    {...props}
  >
    {copy}
  </StyledParagraph>
);

export default Paragraph;
