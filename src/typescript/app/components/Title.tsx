import React from "react";
import styled from "styled-components";

interface TitleStylingProps {
  mouseOver: boolean;
}

interface TitleFullProps extends TitleStylingProps {
  title: string;
}

const TitleS = styled.h1`
  color: ${({ mouseOver }: TitleStylingProps) =>
    mouseOver ? "#ffffff" : "rgb(44, 45, 72)"};
  font-size: 32px;
  margin: 0px;
  transition: color 0.3s ease;
`;

interface TitleProps {
  mouseOver: boolean;
  title: string;
}

export default function Title({ mouseOver, title }: TitleProps) {
  return <TitleS mouseOver={mouseOver}>{title}</TitleS>;
}
