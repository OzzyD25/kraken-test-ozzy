import React from "react";
import styled from "styled-components";
import OctopusLogo from "../svg/octopus-logo";
import CartIcon from "../svg/cart-icon";

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

const Header = () => (
  <StyledHeader>
    <StyledOctopusLogo />

    <StyledCartIcon />
  </StyledHeader>
);

export default Header;
