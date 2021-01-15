import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  logos: string[];
  subTitle: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 124px;
  margin: 0 10px;
`;

const CardHeaderText = styled.h1`
  margin: 0 0 10px 0;
`;

const CardLangLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LangImageWrapper = styled.div`
  width: 43px;
  height: 43px;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LangImage = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const CardFooterText = styled.span`
  font-family: "Nanum Gothic", sans-serif;
  margin: 10px 0 0 0;
`;

const LangGroupCard: React.FC<Props> = ({ title, logos, subTitle }) => (
  <Container>
    <CardHeaderText>{title}</CardHeaderText>
    <CardLangLogoWrapper>
      {logos.map((logo, i) => (
        <LangImageWrapper key={i}>
          <LangImage src={logo} alt="logo" />
        </LangImageWrapper>
      ))}
    </CardLangLogoWrapper>
    <CardFooterText>{subTitle}</CardFooterText>
  </Container>
);

export default LangGroupCard;
