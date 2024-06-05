import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  justify-content: space-between;
  display: flex;
`;

export const Header = () => (
  <StyledHeader>
    <div>Octopus Logo</div>
    <button>Cart</button>
  </StyledHeader>
);
