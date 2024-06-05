import React from "react";
import styled from "styled-components";
import Paragraph from "../paragraph";
import { IProduct } from "../../interfaces";

interface SpecificationsProps {
  product: IProduct;
}

const StyledSpecificationsContainer = styled.div`
  padding: 16px;
`;

const StyledSpecificationRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;

  & p {
    width: 50%;
  }
`;

const Specifications = ({ product }: SpecificationsProps) => (
  <StyledSpecificationsContainer>
    <h2>Specifications</h2>

    <StyledSpecificationRow>
      <Paragraph copy="Brand" />
      <Paragraph copy={product.brand} />
    </StyledSpecificationRow>

    <StyledSpecificationRow>
      <Paragraph copy="Item weight (g)" />
      <Paragraph copy={product.weight} />
    </StyledSpecificationRow>

    <StyledSpecificationRow>
      <Paragraph copy="Dimensions (cm)" />
      <Paragraph
        copy={`${product.height} x ${product.length} x ${product.width}`}
      />
    </StyledSpecificationRow>

    <StyledSpecificationRow>
      <Paragraph copy="Item Model number" />
      <Paragraph copy={product.model_code} />
    </StyledSpecificationRow>

    <StyledSpecificationRow>
      <Paragraph copy="Colour" />
      <Paragraph copy={product.colour} />
    </StyledSpecificationRow>
  </StyledSpecificationsContainer>
);

export default Specifications;
