import React from "react";
import Head from "next/head";
import styled from "styled-components";
import SnowFilter from "@/components/SnowFilter";

const Container = styled.div``;

const HeaderPresenter = styled.header`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f6f6f6;
  background-image: linear-gradient(
      90deg,
      #cdcccc 0px,
      #cdcccc 1px,
      transparent 1px,
      transparent 99px,
      transparent 100px
    ),
    linear-gradient(
      #cdcccc 0px,
      #cdcccc 1px,
      transparent 1px,
      transparent 99px,
      transparent 100px
    ),
    linear-gradient(
      #e0e0e0 0px,
      #e0e0e0 1px,
      transparent 1px,
      transparent 99px,
      transparent 100px
    ),
    linear-gradient(
      90deg,
      #e0e0e0 0px,
      #e0e0e0 1px,
      transparent 1px,
      transparent 99px,
      transparent 100px
    ),
    linear-gradient(
      transparent 0px,
      transparent 5px,
      #f6f6f6 5px,
      #f6f6f6 95px,
      transparent 95px,
      transparent 100px
    ),
    linear-gradient(
      90deg,
      #e0e0e0 0px,
      #e0e0e0 1px,
      transparent 1px,
      transparent 99px,
      #e0e0e0 99px,
      #e0e0e0 100px
    ),
    linear-gradient(
      90deg,
      transparent 0px,
      transparent 5px,
      #f6f6f6 5px,
      #f6f6f6 95px,
      transparent 95px,
      transparent 100px
    ),
    linear-gradient(
      transparent 0px,
      transparent 1px,
      #f6f6f6 1px,
      #f6f6f6 99px,
      transparent 99px,
      transparent 100px
    ),
    linear-gradient(#cdcccc, #cdcccc);
  background-size: 100px 100%, 100% 100px, 100% 10px, 10px 100%, 100% 100px,
    100px 100%, 100px 100%, 100px 100px, 100px 100px;
`;

const HeaderLogoWrapper = styled.div``;

const HeaderLogoImage = styled.img``;

const HeaderDescWrapper = styled.div`
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

const MainPresenter = styled.main``;

const FooterPresenter = styled.footer``;

const TextUnderLine = styled.span`
  border-bottom: 6px solid #0986c6;
`;

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <HeaderPresenter>
          <HeaderLogoWrapper>
            <SnowFilter>
              <HeaderLogoImage src="/mountain.png" alt="logo" />
            </SnowFilter>
          </HeaderLogoWrapper>
          <HeaderDescWrapper>
            <LogoSubText>95년 12월에 태어난 겨울☃️속성 개발자</LogoSubText>
            <LogoText>
              <TextUnderLine>신병주</TextUnderLine>
            </LogoText>
            <LogoSubText>입니다. 반갑습니다!👋</LogoSubText>
          </HeaderDescWrapper>
        </HeaderPresenter>
        <MainPresenter></MainPresenter>
        <FooterPresenter></FooterPresenter>
      </Container>
    </>
  );
};

export default Home;
