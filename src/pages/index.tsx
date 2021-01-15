import React from "react";
import styled from "styled-components";
import { SectionCubeFilter, SnowFilter } from "@/components/AnimateFilter";
import BadgeText from "@/components/BadgeText";
import LangGroupCard from "@/components/LangGroupCard";

// Text styles
const ContentTitle = styled.h1``;

const ContentSubTitle = styled.h2``;

const ContentBody = styled.p`
  font-size: 18px;
  line-height: 1.75rem;
`;

const TextUnderLine = styled.span`
  border-bottom: 5px solid #0986c6;
`;

const Container = styled.main`
  width: 100vw;
  max-height: 100vh;
  overflow: overlay;
  scroll-snap-type: y mandatory;
  ::-webkit-scrollbar {
    width: 16px;
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
  }
  ::-webkit-scrollbar-track {
  }
`;

const CommonPresenter = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  &:nth-of-type(1) {
  }
  &:nth-of-type(2) {
    background-color: #fff;
  }
  &:nth-of-type(3) {
    background-color: #f5f6f7;
  }
`;

const ContentWrapper = styled.div`
  width: 1200px;
  z-index: 100;
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
const AboutMeContent = styled.div``;

const MyPicture = styled.img`
  height: 192px;
  width: 192px;
  border-radius: 50%;
`;

const MyStory = styled.div``;

const IntroduceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > * {
    :first-child {
      margin-right: 50px;
    }
  }
`;

const QuestionWrapper = styled.div``;

const QuestionList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

const QuestionItem = styled.li`
  list-style: none;
  padding: 10px;
  width: 360px;
`;

const QuestionTitle = styled(ContentSubTitle)`
  font-size: 21px;
  line-height: 1.85rem;
  height: 87px;
  ::before {
    display: flex;
    flex-direction: row;
    content: "Question.";
    font-size: 21px;
  }
`;

const QuestionBody = styled(ContentBody)`
  font-size: 15px;
`;

// My skills section styles
const MySkillHeader = styled.div``;

const ProfileBox = styled.div`
  width: 368px;
  height: 194px;
  background-color: #fff;
  border-radius: 12px;
  float: left;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 102px;
  height: 102px;
  margin-right: 24px;
`;

const ProfileContent = styled.div``;

const ProfileText = styled.p`
  font-family: "Nanum Gothic", sans-serif;
  margin: 8px 0;
`;

const ProfileName = styled.h1`
  font-family: "Nanum Gothic", sans-serif;
  justify-content: center;
  align-items: center;
  margin: 0 0 16px 0;
`;

const SkillBox = styled.div`
  width: 800px;
  height: 194px;
  background-color: #fff;
  border-radius: 12px;
  float: right;
  padding: 0 10px;
`;

const MySkillContent = styled.div`
  margin: 0 10px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Home: React.FC = () => {
  const [lang, setLang] = React.useState<string>("default");

  return (
    <Container>
      <CommonPresenter>
        <LogoWrapper>
          <SnowFilter>
            <LogoImage src="/mountain.png" alt="logo" />
          </SnowFilter>
        </LogoWrapper>
        <LogoDescWrapper>
          <LogoSubText>
            95년 12월 겨울에 태어난 개발을 즐기는 개발자
          </LogoSubText>
          <LogoText>
            <TextUnderLine>신병주</TextUnderLine>
          </LogoText>
          <LogoSubText>입니다. 반갑습니다!👋</LogoSubText>
        </LogoDescWrapper>
      </CommonPresenter>
      <CommonPresenter>
        <ContentWrapper>
          <AboutMeContent>
            <IntroduceWrapper>
              <MyPicture src="/profile.jpg" alt="profile" />
              <MyStory>
                <ContentTitle>
                  배우고 만드는게 즐거워 노력하는 개발자
                </ContentTitle>
                <ContentSubTitle>
                  내 손으로 가치를 만드는 즐거움. 👐
                </ContentSubTitle>
                <ContentBody>
                  중학교 당시 처음 만든 프로그램을 친구들에게 보여줄 때의
                  짜릿함을 잊지 못해 개발자의 길을 달리고 있는 신병주입니다.
                  지금까지 달려오며 다양한 분야를 접해보고 더욱 개발이란
                  창의적인 분야에 빠져들었습니다. 지금까지 달려온 길에서, 또
                  앞으로 배우게 될 경험과 지식을 통해 가치 있는 서비스를 함께
                  만들 수 있는 개발자가 되고 싶습니다.
                </ContentBody>
              </MyStory>
            </IntroduceWrapper>
            <QuestionWrapper>
              <QuestionList>
                <QuestionItem>
                  <QuestionTitle>어떤 개발자가 되고 싶은가요?</QuestionTitle>
                  <QuestionBody>
                    소스코드로 많은 사람들에게 영감을 주는 개발자가
                    되고싶습니다. 많은 오픈소스에 도움을 받으며 성장해온 저는
                    오픈소스 생태계의 중요성을 많이 느껴 왔습니다. 과거 나의
                    코드를 숨기는게 경쟁력이였던것과 달리 지금은 많은 사람들에게
                    영감을 주는 개발자가 더욱 가치있는 개발자라고 생각하기
                    때문입니다.
                  </QuestionBody>
                </QuestionItem>
                <QuestionItem>
                  <QuestionTitle>
                    개발 중 문제가 발생하면 어떻게 해결하나요?
                  </QuestionTitle>
                  <QuestionBody>
                    저는 먼저 문제가 되는 로직에서 어떤 부분과 관련성이 있는지
                    찾습니다. 그 이후 문제를 작은 단위로 나눠 관련된 공식 문서
                    또는 검색을 통해 놓친 부분을 찾아보고 오류가 발생할 수 있는
                    테스트 케이스를 적용하며 문제를 해결합니다. 이런 방식은
                    해결하기 어려운 논리적 오류를 효과적으로 해결하고 단순히
                    문제를 해결하는 것 외에도 많은 공부가 된다고 생각합니다.
                  </QuestionBody>
                </QuestionItem>
                <QuestionItem>
                  <QuestionTitle>
                    의사소통 중 발생하는 의견 충돌을 어떻게 풀어갈 건가요?
                  </QuestionTitle>
                  <QuestionBody>
                    저는 의견 충돌은 각자 이 주제에 대해서 고민했기에 생기는
                    일이라고 생각하여 긍정적으로 받아들입니다. 하지만 이
                    과정에서 감정적으로 된다면 더 이상의 발전적인 의사소통이
                    힘들기 때문에 감정적인 부분과 적절한 의견 수립을 중요하게
                    생각하여 이 부분에 집중하여 풀어갈 것입니다.
                  </QuestionBody>
                </QuestionItem>
              </QuestionList>
            </QuestionWrapper>
          </AboutMeContent>
        </ContentWrapper>
      </CommonPresenter>
      <CommonPresenter>
        <SectionCubeFilter />
        <ContentWrapper>
          <MySkillHeader>
            <ProfileBox>
              <ProfileImage src="/profile.jpg" alt="profile" />
              <ProfileContent>
                <ProfileName>신병주</ProfileName>
                <ProfileText>
                  희망 직군 &middot;{" "}
                  <BadgeText bgColor="#06458d" text="#웹 개발" />
                </ProfileText>
                <ProfileText>
                  희망 업무 &middot;{" "}
                  <BadgeText bgColor="#1f5cb7" text="#Back-end" />
                </ProfileText>
                <ProfileText>
                  경력 구분 &middot;{" "}
                  <BadgeText bgColor="#cf9933" text="#신입" />
                </ProfileText>
              </ProfileContent>
            </ProfileBox>
            <SkillBox>
              <MySkillContent>
                <LangGroupCard
                  title="🥇"
                  subTitle="Friendly"
                  logos={[
                    "/ts-logo-128.png",
                    "/js-logo-480.png",
                    "/golang-logo-400.png",
                  ]}
                />
                <LangGroupCard
                  title="🥈"
                  subTitle="Friendly"
                  logos={["/python-logo-768.png", "/cpp-logo-920.png"]}
                />
                <LangGroupCard
                  title="🥉"
                  subTitle="Friendly"
                  logos={["/java-logo-518.png", "/php-logo-256.jpg"]}
                />
                <LangGroupCard
                  title="🧪"
                  subTitle="Learning"
                  logos={["/rust-logo-220.png", "/kotlin-logo-240.png"]}
                />
              </MySkillContent>
            </SkillBox>
          </MySkillHeader>
        </ContentWrapper>
      </CommonPresenter>
    </Container>
  );
};

export default Home;
