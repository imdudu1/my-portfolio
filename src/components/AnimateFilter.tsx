import React from "react";
import styled from "styled-components";

const styles = require("@/styles/AnimateStyle.module.scss");

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const WideContainer = styled(Container)`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Presenter = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const SnowFilter: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
      <div className={styles.snow}></div>
    </Container>
  );
};

export const SectionCubeFilter: React.FC = () => {
  return (
    <WideContainer>
      <Presenter>
        <ul className={styles.cubes}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Presenter>
    </WideContainer>
  );
};
