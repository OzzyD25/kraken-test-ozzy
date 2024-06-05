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
        custom={css`
          width: 50%;
        `}
      />
      <Paragraph
        copy={product.brand}
        custom={css`
          width: 50%;
        `}
      />
    </StyledSpecificationRow>

    <StyledSpecificationRow>
      <Paragraph
        copy="Item weight (g)"
        custom={css`
          width: 50%;
        `}
      />
      <Paragraph
        copy={product.weight}
        custom={css`
          width: 50%;
        `}
      />
    </StyledSpecificationRow>

    <StyledSpecificationRow>
      <Paragraph
        copy="Dimensions (cm)"
        custom={css`
          width: 50%;
        `}
      />
      <Paragraph
        copy={`${product.height} x ${product.length} x ${product.width}`}
        custom={css`
          width: 50%;
        `}
      />
    </StyledSpecificationRow>

    <StyledSpecificationRow>
      <Paragraph
        copy="Item model number"
        custom={css`
          width: 50%;
        `}
      />
      <Paragraph
        copy={product.model_code}
        custom={css`
          width: 50%;
        `}
      />
    </StyledSpecificationRow>

    <StyledSpecificationRow>
      <Paragraph
        copy="Colour"
        custom={css`
          width: 50%;
        `}
      />
      <Paragraph
        copy={product.colour}
        custom={css`
          width: 50%;
        `}
      />
    </StyledSpecificationRow>
  </StyledSpecificationsContainer>
);

export default Specifications;
