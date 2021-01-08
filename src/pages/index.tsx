import React from "react";
import styled from "styled-components";
import SnowFilter from "@/components/SnowFilter";

const Container = styled.main`
  height: 100vh;
  width: 100vw;
`;

// Layout styles
const RowTable = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const RowTableItem = styled.li`
  list-style: none;
  flex: 0 0 50%;
`;

// Logo section styles
const LogoPresenter = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

// About me section styles
const AboutMePresenter = styled.section`
  background-color: #fff;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        <RowTable>
          <RowTableItem>
            <LogoPresenter>
              <LogoWrapper>
                <SnowFilter>
                  <LogoImage src="/mountain.png" alt="logo" />
                </SnowFilter>
              </LogoWrapper>
              <LogoDescWrapper>
                <LogoSubText>95년 12월에 태어난 냉기☃️속성 개발자</LogoSubText>
                <LogoText>
                  <TextUnderLine>신병주</TextUnderLine>
                </LogoText>
                <LogoSubText>입니다. 반갑습니다!👋</LogoSubText>
              </LogoDescWrapper>
            </LogoPresenter>
          </RowTableItem>
          <RowTableItem>
            <AboutMePresenter></AboutMePresenter>
          </RowTableItem>
        </RowTable>
      </Container>
    </>
  );
};

export default Home;
