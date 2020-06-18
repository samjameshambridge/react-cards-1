import React, { ReactElement } from "react";
import styled from "styled-components";
import { DefaultTheme } from "../types/interfaces";

interface ArrowStylingProps {
  defaultTheme: DefaultTheme;
  mouseOver: boolean;
}

const ArrowS = styled.svg`
  bottom: 22px;
  color: ${({
    defaultTheme: { borderColor, txtColorHover },
    mouseOver,
  }: ArrowStylingProps) => (mouseOver ? txtColorHover : borderColor)};
  fill: currentcolor;
  height: 16px;
  position: absolute;
  transition: color 0.3s ease;
  width: 36px;
`;

export default function Arrow({
  defaultTheme,
  mouseOver,
}: ArrowStylingProps): ReactElement {
  return (
    <ArrowS
      defaultTheme={defaultTheme}
      mouseOver={mouseOver}
      viewBox="0 0 36 16"
    >
      <path d="M28 0l-1.41 1.41L32.17 7H0v2h32.17l-5.58 5.59L28 16l8-8z"></path>
    </ArrowS>
  );
}
