import React, { ReactElement } from "react";
import styled from "styled-components";

interface ImgStylingProps {
  right: string;
  top: string;
}

interface ImgFullProps extends ImgStylingProps {
  img: string;
}

const ImgS = styled.img`
  height: 141px;
  position: absolute;
  right: ${({ right }: ImgStylingProps) => (right ? right : null)};
  top: ${({ top }: ImgStylingProps) => (top ? top : null)};
`;

export default function Img({ img, right, top }: ImgFullProps): ReactElement {
  return <ImgS src={img} right={right} top={top} />;
}
