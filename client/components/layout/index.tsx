import styled from "styled-components";
import { Header } from "../header";

const StyledLayoutContainer = styled.div`
  padding: 16px;
`;

export const LayoutContainer = ({ children }) => (
  <StyledLayoutContainer>
    <Header />

    {children}
  </StyledLayoutContainer>
);
