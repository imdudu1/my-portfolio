import React from "react";
import styled from "styled-components";

interface Props {
  logoPath: string;
  name: string;
  homepage: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 180px;
  background-color: #1c2029;
  border-radius: 5px;
  margin: 25px 10px 10px 10px;
`;

const Logo = styled.img`
  position: relative;
  top: -10px;
  left: -10px;
  width: 38px;
  height: 38px;
  border-radius: 3px;
  background-color: #fff;
`;

const LangInfoWrapper = styled.div``;

const LangName = styled.p`
  color: #d4d4d4;
  font-size: 21px;
  margin: 12px 0 12px 10px;
`;

const Link = styled.a`
  :link {
    text-decoration: none;
  }
  :visited {
    text-decoration: none;
  }
  :hover {
    text-decoration: none;
  }
`;

const LangCard: React.FC<Props> = ({ logoPath, name, homepage }) => (
  <Container>
    <Logo src={logoPath} />
    <LangInfoWrapper>
      <Link href={homepage}>
        <LangName>{name}</LangName>
      </Link>
    </LangInfoWrapper>
  </Container>
);

export default LangCard;
