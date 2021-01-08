import React from "react";
import styled from "styled-components";
import SnowFilter from "@/components/SnowFilter";

const Container = styled.main`
  width: 100vw;
  max-height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
`;

const CommonPresenter = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  &:nth-of-type(1) {
    
  }
  &:nth-of-type(2) {
    background-color: #fff;
  }
`;

// Logo section styles
const LogoWrapper = styled.div``;

const LogoImage = styled.img``;

const LogoDescWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoText = styled.h1`
  font-family: "Nanum Myeongjo", sans-serif;
  font-size: 100px;
  font-weight: 700;
  margin: 2px 0 16px 0;
`;

const LogoSubText = styled.p`
  font-family: "Nanum Brush Script", sans-serif;
  font-size: 28px;
  margin: 0;
`;

// Text styles
const ContentTitle = styled.h1``;

const ContentSubTitle = styled.h2``;

const ContentBody = styled.p``;

const TextUnderLine = styled.span`
  border-bottom: 5px solid #0986c6;
`;

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <CommonPresenter>
          <LogoWrapper>
            <SnowFilter>
              <LogoImage src="/mountain.png" alt="logo" />
            </SnowFilter>
          </LogoWrapper>
          <LogoDescWrapper>
            <LogoSubText>95년 12월에 태어난 개발을 즐기는 개발자</LogoSubText>
            <LogoText>
              <TextUnderLine>신병주</TextUnderLine>
            </LogoText>
            <LogoSubText>입니다. 반갑습니다!👋</LogoSubText>
          </LogoDescWrapper>
        </CommonPresenter>
        <CommonPresenter></CommonPresenter>
      </Container>
    </>
  );
};

export default Home;
