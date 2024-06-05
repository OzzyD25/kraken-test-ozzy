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

const Header = () => {
  // const cartProducts = useSelector(
  //   (state: RootState) => state.cart.cartProducts
  // );

  return (
    <StyledHeader>
      <StyledOctopusLogo />

      <div>
        <StyledCartIcon />
        <Paragraph copy={"0"} title="Baseket items" />
      </div>
    </StyledHeader>
  );
};

export default Header;
