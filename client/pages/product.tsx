import React from "react";
import { GetServerSideProps } from "next";
import styled, { css } from "styled-components";

// type
import { IProduct } from "../interfaces";

// components
import LayoutContainer from "../components/layout";
import Paragraph from "../components/paragraph";
import CartActions from "../components/product-page/cart-actions";
import Specifications from "../components/product-page/specifications";
import Header from "../components/header";

const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 1440px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1024px) {
    max-width: 550px;
  }
`;

const StyledProductImage = styled.img`
  border-radius: 10px;
  max-height: 400px;
  max-width: 340px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-height: 600px;
    max-width: 508px;
  }
`;

const StyledProductTitle = styled.div`
  padding: 16px;
`;

const StyledProductDescription = styled.div`
  padding: 16px;

  @media (max-width: 1023px) {
    background: ${css`var(--hemocyanin)`};
  }
`;

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  return (
    <LayoutContainer>
      <StyledProductContainer>
        <StyledProductImage src={product.img_url} />

        <StyledProductInformation>
          <StyledProductTitle>
            <h1>{product.name}</h1>
            <Paragraph
              copy={`${product.power} // Packet of 4`}
              custom={css`
                color: var(--purpleHaze);
              `}
            />
          </StyledProductTitle>

          <CartActions product={product} />

          <StyledProductDescription>
            <h2>Description</h2>
            <Paragraph copy={product.description} />
          </StyledProductDescription>

          <Specifications product={product} />
        </StyledProductInformation>
      </StyledProductContainer>
    </LayoutContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/product"); // process.env.NEXT_PUBLIC_API_BASE_URL
  const response = await res.json();

  return { props: { product: response.products[0] } };
};
