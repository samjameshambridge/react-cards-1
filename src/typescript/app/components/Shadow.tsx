import React, { ReactElement } from "react";
import styled from "styled-components";

interface ShadowFullProps {
  mouseOver: boolean;
}

const ShadowS = styled.div`
  background: rgb(237, 223, 209);
  border-radius: 15px;
  content: "hello";
  display: block;
  height: 302px;
  position: absolute;
  bottom: ${({ mouseOver }: ShadowFullProps) => (mouseOver ? "-7px" : "0px")};
  transition: bottom 0.6s ease, right 0.6s ease;
  right: ${({ mouseOver }: ShadowFullProps) => (mouseOver ? "-7px" : "0px")};
  width: 278px;
  z-index: -1;
`;

export default function Shadow({ mouseOver }: ShadowFullProps): ReactElement {
  return <ShadowS mouseOver={mouseOver} />;
}
