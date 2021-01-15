import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
  color: string;
}

const Text = styled.span`
  padding: 3px 9px;
  color: #fff;
  background-color: ${(props) => props.color || "white"};
  border-radius: 12px;
  font-size: 13px;
  justify-content: center;
  align-items: center;
  font-family: "Nanum Gothic", sans-serif;
`;

const BadgeText: React.FC<Props> = ({ text, color }) => (
  <Text color={color}>{text}</Text>
);

export default BadgeText;
