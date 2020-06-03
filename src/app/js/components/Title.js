import React from "react";
import styled from "styled-components";

const TitleS = styled.h1`
  color: ${(props) => (props.mouseOver ? "#ffffff" : "rgb(44, 45, 72)")};
  font-size: 32px;
  margin: 0px;
  transition: color 0.3s ease;
`;

export default function Title({ mouseOver, title }) {
  return <TitleS mouseOver={mouseOver}>{title}</TitleS>;
}
