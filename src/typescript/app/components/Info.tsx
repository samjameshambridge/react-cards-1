import React, { ReactElement } from "react";
import styled from "styled-components";

interface InfoStylingProps {
  mouseOver: boolean;
}

interface InfoFullProps extends InfoStylingProps {
  info: string;
}

const InfoS = styled.p`
  color: ${({ mouseOver }: InfoStylingProps) =>
    mouseOver ? "#ffffff" : "rgb(44, 45, 72)"};
  position: relative;
  transition: color 0.3s ease;
`;

export default function Info({ info, mouseOver }: InfoFullProps): ReactElement {
  return <InfoS mouseOver={mouseOver}>{info}</InfoS>;
}
