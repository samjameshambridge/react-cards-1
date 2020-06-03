import React from "react";
import styled from "styled-components";

const InfoS = styled.p`
  color: ${(props) => (props.mouseOver ? "#ffffff" : "rgb(44, 45, 72)")};
  position: relative;
  transition: color 0.3s ease;
`;

export default function Info({ info, mouseOver }) {
  return <InfoS mouseOver={mouseOver}>{info}</InfoS>;
}
