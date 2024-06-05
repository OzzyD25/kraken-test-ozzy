import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

// store
import { RootState } from "../../store";

// components
import OctopusLogo from "../svg/octopus-logo";
import CartIcon from "../svg/cart-icon";
import Paragraph from "../paragraph";

const StyledHeader = styled.header`
  justify-content: space-between;
  display: flex;
  padding: 16px;
`;

const StyledOctopusLogo = styled(OctopusLogo)`
  width: 140px;
`;

const StyledCartIcon = styled(CartIcon)`
  width: 24px;
`;

const StyledCartFlex = styled.div`
  display: flex;
  gap: 8px;
`;

const selectCartItemsCount = (state: RootState) =>
  state.cart.cartProducts.length;

const Header = () => {
  const cartItemCount = useSelector(selectCartItemsCount);

  return (
    <StyledHeader>
      <StyledOctopusLogo />

      <StyledCartFlex>
        <StyledCartIcon />
        {cartItemCount !== 0 && (
          <Paragraph copy={cartItemCount} title="Basket items" />
        )}
      </StyledCartFlex>
    </StyledHeader>
  );
};

export default Header;
