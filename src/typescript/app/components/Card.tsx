import React, { Component, createRef } from "react";
import * as gsap from "gsap";
import styled from "styled-components";

import Arrow from "./Arrow";
import Grid from "./Grid";
import Info from "./Info";
import Img from "./Img";
import Letter from "./Letter";
import Title from "./Title";

import { CardInfo, DefaultTheme, SecondaryTheme } from "../types/interfaces";

interface BaseStylingProps {
  defaultTheme?: DefaultTheme;
  mouseOver: boolean;
}

interface CardStylingProps extends BaseStylingProps {
  secondaryTheme: SecondaryTheme;
}

interface CardProps {
  content: CardInfo;
}

interface CardState {
  mouseOver: boolean;
}

const CardWrapper = styled.div`
  height: 336px;
  margin: 10px 20px;
  perspective: 500px;
  position: relative;
  transform: ${({ mouseOver }: BaseStylingProps) =>
    mouseOver ? "scale(1.03) translateZ(0px)" : "scale(1) translateZ(0px)"};
  transition: transform ease 0.5s;
  width: 309px;
`;

const CardBody = styled.div`
  background: ${({
    defaultTheme: { bgColor },
    mouseOver,
    secondaryTheme: { primaryColor },
  }: CardStylingProps) => (mouseOver ? primaryColor : bgColor)};
  border-width: 1px;
  border-style: solid;
  border-color: ${({
    defaultTheme: { borderColor },
    mouseOver,
    secondaryTheme: { secondaryColor },
  }: CardStylingProps) => (mouseOver ? secondaryColor : borderColor)};
  border-radius: 15px;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  padding: 20px;
  position: relative;
  outline-color: rgb(44, 45, 72);
  transform: translate(0px, 0px);
  transition: background 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s,
    border 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s,
    color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  width: 100%;
  z-index: 1;
`;

const ShadowS = styled.div`
  background: ${({ defaultTheme: { shadowColor } }: BaseStylingProps) =>
    shadowColor ? shadowColor : ""};
  border-radius: 15px;
  content: "hello";
  display: block;
  height: 302px;
  position: absolute;
  bottom: ${({ mouseOver }: BaseStylingProps) => (mouseOver ? "-7px" : "0px")};
  transform: translate(0px, 0px);
  transition: bottom 0.6s ease, right 0.6s ease;
  right: ${({ mouseOver }: BaseStylingProps) => (mouseOver ? "-7px" : "0px")};
  width: 278px;
  z-index: -1;
`;

const ImgWrapper = styled.div`
  height: 50%;
  width: 100%;
`;

export default class Card extends Component<CardProps, CardState> {
  private cardBodyRef: React.RefObject<HTMLDivElement>;
  private cardWrapperRef: React.RefObject<HTMLDivElement>;
  private shadowRef: React.RefObject<HTMLDivElement>;

  public constructor(props: CardProps) {
    super(props);

    // dom references
    this.cardBodyRef = createRef();
    this.shadowRef = createRef();

    this.state = {
      mouseOver: false,
    };
  }

  componentDidUpdate() {
    var { mouseOver } = this.state;

    if (mouseOver) {
      var rotateElems = [this.cardBodyRef.current, this.shadowRef.current];

      this.animate3dRotation(rotateElems);
    }
  }

  animate3dRotation(elems: Array<Element>) {
    var {
      gsap: { timeline },
    } = gsap;
    // @ts-ignore
    var tl = new timeline();

    tl.to(elems, { duration: 0.18, rotationX: "-8deg" })
      .to(elems, { duration: 0.3, rotationX: "1deg" })
      .to(elems, { duration: 0.15, rotationX: "0deg" });
  }

  onMouseStateChange() {
    this.setState({ mouseOver: !this.state.mouseOver });
  }

  render() {
    const {
      content: {
        defaultTheme,
        img,
        imgRight,
        imgTop,
        info,
        letter,
        secondaryTheme,
        title,
      },
    } = this.props;

    const { mouseOver } = this.state;

    return (
      <CardWrapper
        onMouseEnter={() => this.onMouseStateChange()}
        onMouseLeave={() => this.onMouseStateChange()}
        mouseOver={mouseOver}
      >
        <CardBody
          ref={this.cardBodyRef}
          defaultTheme={defaultTheme}
          secondaryTheme={secondaryTheme}
          mouseOver={mouseOver}
        >
          <ImgWrapper>
            <Grid secondaryTheme={secondaryTheme} mouseOver={mouseOver} />
            <Letter
              letter={letter}
              defaultTheme={defaultTheme}
              secondaryTheme={secondaryTheme}
              mouseOver={mouseOver}
            />
            <Img top={imgTop} right={imgRight} img={img} />
          </ImgWrapper>
          <Title title={title} mouseOver={mouseOver} />
          <Info info={info} mouseOver={mouseOver} />
          <Arrow defaultTheme={defaultTheme} mouseOver={mouseOver} />
        </CardBody>
        <ShadowS
          ref={this.shadowRef}
          defaultTheme={defaultTheme}
          mouseOver={mouseOver}
        />
      </CardWrapper>
    );
  }
}
