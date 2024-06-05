import React from "react";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import { LayoutContainer } from "../components/layout";
import { IProduct } from "../interfaces";

const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledProductInformation = styled.div``;

const StyledProductImage = styled.img`
  border-radius: 10px;
`;

const StyledButton = styled.button`
  background: #f050f8;
  color: #180048;
  border: 0px;
  cursor: pointer;
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
          <div>
            <h1>{product.name}</h1>
            <p>{`${product.power} // Packet of 4`}</p>
          </div>

          <div>
            <p>{`£${product.price}`}</p>
            <StyledButton>-</StyledButton>
            <StyledButton>+</StyledButton>
            <StyledButton>Add to cart</StyledButton>

            <button>hello</button>
          </div>

          <div>
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>

          <div>
            <h2>Specifications</h2>
          </div>
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
