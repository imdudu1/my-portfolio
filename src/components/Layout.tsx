import React, { ReactElement } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Layout: React.FC = ({ children }) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
);

export default Layout;
