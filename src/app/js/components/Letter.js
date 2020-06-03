import React from "react";
import styled from "styled-components";

const LetterS = styled.span`
  color: ${({
    defaultTheme: { txtColor },
    mouseOver,
    secondaryTheme: { secondaryColor },
  }) => (mouseOver ? secondaryColor : txtColor)};
  font-size: 138.6px;
  right: 20px;
  position: absolute;
  top: 0px;
  transition: color 0.3s ease;
`;

function Letter({ defaultTheme, letter, mouseOver, secondaryTheme }) {
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
