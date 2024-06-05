import { ReactNode } from "react";
import styled from "styled-components";

// components
import Header from "../header";
import Footer from "../footer";

interface LayoutContainerProps {
  children: ReactNode;
}

const StyledLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const LayoutContainer = ({ children }: LayoutContainerProps) => (
  <StyledLayoutContainer>
    <Header />

    {children}

    <Footer />
  </StyledLayoutContainer>
);

export default LayoutContainer;
