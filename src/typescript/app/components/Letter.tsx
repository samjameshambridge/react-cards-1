import React, { ReactElement } from "react";
import styled from "styled-components";
import { DefaultTheme, SecondaryTheme } from "../types/interfaces";

interface StylingLetterProps {
  defaultTheme: DefaultTheme;
  mouseOver: boolean;
  secondaryTheme: SecondaryTheme;
}

interface FullLetterProps extends StylingLetterProps {
  letter: string;
}

const LetterS = styled.span`
  color: ${({
    defaultTheme: { txtColor },
    mouseOver,
    secondaryTheme: { secondaryColor },
  }: StylingLetterProps) => (mouseOver ? secondaryColor : txtColor)};
  font-size: 138.6px;
  right: 20px;
  position: absolute;
  top: 0px;
  transition: color 0.3s ease;
`;

function Letter({
  defaultTheme,
  letter,
  mouseOver,
  secondaryTheme,
}: FullLetterProps): ReactElement {
  return (
    <LetterS
      mouseOver={mouseOver}
      defaultTheme={defaultTheme}
      secondaryTheme={secondaryTheme}
    >
      {letter}
    </LetterS>
  );
}

export default Letter;
