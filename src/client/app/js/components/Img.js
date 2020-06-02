import React from "react";
import styled from "styled-components";

const ImgS = styled.img`
  height: 141px;
  position: absolute;
  right: ${({ right }) => (right ? right : null)};
  top: ${({ top }) => (top ? top : null)};
`;

export default function Img({ img, right, top }) {
  return <ImgS src={img} right={right} top={top} />;
}
