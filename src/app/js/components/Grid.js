import React from "react";
import styled from "styled-components";

const GridS = styled.svg`
  color: rgb(44, 45, 72);
  display: block;
  height: 90px;
  right: 20px;
  position: absolute;
  stroke: ${({ mouseOver, secondaryTheme: { secondaryColor } }) =>
    mouseOver ? secondaryColor : "rgb(209, 189, 170)"};
  transition: stroke 0.3s ease;
  top: 30px;
  width: 90px;
`;

function Grid({ mouseOver, secondaryTheme }) {
  return (
    <GridS
      mouseOver={mouseOver}
      secondaryTheme={secondaryTheme}
      viewBox="0 0 412 412"
    >
      <g fill="none" fill-rule="evenodd" stroke-width="5">
        <path d="M1 329.501h410M1 165.501h410M1 247.501h410M1 83.501h410"></path>
        <path d="M83.25 1.25v410.5M247.25 1.25v410.5M165.25 1.25v410.5M329.25 1.25v410.5"></path>
        <path d="M1 1h410v410H1z"></path>
      </g>
    </GridS>
  );
}

export default Grid;
