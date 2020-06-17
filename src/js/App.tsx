import React from "react";
import styled from "styled-components";

import Card from "./components/Card";
import CardContent from "./content/cardContent";
import { CardInfo } from "./types/interfaces";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  min-height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export default function App() {
  return (
    <Wrapper>
      {CardContent.map((curr: CardInfo, index) => (
        <Card content={curr} key={index} />
      ))}
    </Wrapper>
  );
}
