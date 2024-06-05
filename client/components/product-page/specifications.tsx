import React from "react";
import styled, { css } from "styled-components";
import Paragraph from "../paragraph";
import { IProduct } from "../../interfaces";

interface SpecificationsProps {
  product: IProduct;
}
interface SpecificationItem {
  label: string;
  value: string | number;
}

const StyledSpecificationsContainer = styled.div`
  padding: 16px;
`;

const StyledSpecificationRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

const SpecificationItem = ({ label, value }: SpecificationItem) => (
  <StyledSpecificationRow>
    <Paragraph
      copy={label}
      custom={css`
        width: 50%;
      `}
    />
    <Paragraph
      copy={value}
      custom={css`
        width: 50%;
      `}
    />
  </StyledSpecificationRow>
);

const Specifications = ({ product }: SpecificationsProps) => (
  <StyledSpecificationsContainer>
    <h2>Specifications</h2>

    <SpecificationItem label="Brand" value={product.brand} />

    <SpecificationItem label="Item weight (g)" value={product.weight} />

    <SpecificationItem
      label="Dimensions (cm)"
      value={`${product.height} x ${product.length} x ${product.width}`}
    />

    <SpecificationItem label="Item model number" value={product.model_code} />

    <SpecificationItem label="Colour" value={product.colour} />
  </StyledSpecificationsContainer>
);

export default Specifications;
