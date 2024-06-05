import React from "react";
import styled, { css } from "styled-components";

const StyledFooter = styled.footer`
  padding: 16px;
  font-size: 10px;
  color: ${css`var(--purpleHaze)`};
  background: ${css`var(--hemocyanin)`};

  @media (min-width: 1024px) {
    text-align: center;
  }
`;

const Footer = () => (
  <StyledFooter>
    Octopus Energy Ltd is a company registered in England and Wales. Registered
    number: 09263424. Registered office: 33 Holborn, London, ECIN 2HT. Trading
    office: 20-24 Broadwick Street, London, WIF 8HT
  </StyledFooter>
);

export default Footer;
