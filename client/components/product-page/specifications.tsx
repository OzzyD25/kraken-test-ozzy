import React from "react";
import styled, { css } from "styled-components";
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
`;

const Specifications = ({ product }: SpecificationsProps) => (
  <StyledSpecificationsContainer>
    <h2>Specifications</h2>

    <StyledSpecificationRow>
      <Paragraph
        copy="Brand"
        customStyles={css`
          width: 50%;
        `}
      />
      <Paragraph
        copy={product.brand}
        customStyles={css`
          width: 50%;
        `}
      />
    </StyledSpecificationRow>

    <StyledSpecificationRow>
      <Paragraph
        copy="Item weight (g)"
        customStyles={css`
          width: 50%;
        `}
      />
      <Paragraph
        copy={product.weight}
        customStyles={css`
          width: 50%;
        `}
      />
    </StyledSpecificationRow>

    <StyledSpecificationRow>
      <Paragraph
        copy="Dimensions (cm)"
        customStyles={css`
          width: 50%;
        `}
      />
      <Paragraph
        copy={`${product.height} x ${product.length} x ${product.width}`}
      />
    </StyledSpecificationRow>

    <StyledSpecificationRow>
      <Paragraph
        copy="Item Model number"
        customStyles={css`
          width: 50%;
        `}
      />
      <Paragraph
        copy={product.model_code}
        customStyles={css`
          width: 50%;
        `}
      />
    </StyledSpecificationRow>

    <StyledSpecificationRow>
      <Paragraph
        copy="Colour"
        customStyles={css`
          width: 50%;
        `}
      />
      <Paragraph
        copy={product.colour}
        customStyles={css`
          width: 50%;
        `}
      />
    </StyledSpecificationRow>
  </StyledSpecificationsContainer>
);

export default Specifications;
